import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


export class adminlogin {
  constructor(
    public  username: String,
    public  password: String,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private httpClient: HttpClient, private router:Router) {
  }
  // saveResto(data: any)
  //  {
  //     return this.httpClient.post<adminlogin[]>('http://localhost:8088/admin/authenticate',data)
  //  }

  authent(username: string, password: string) {
    return this.httpClient.post<adminlogin[]>('http://localhost:8088/admin/authenticate',{username: username, password: password})
    .subscribe((userData:any)=> {
      console.log(userData);
      if(userData.jwt=="no") {
        alert("Invalid Credentials");
        this.router.navigate(['AdminLogin']);
      }
      else {
      sessionStorage.setItem('username',username);
      let token ="Bearer "+userData.jwt;
      sessionStorage.setItem('token', token);
      console.log(token);
      alert("Log-in Successful");
      this.router.navigate(['adminhome']);
      }
    }
    );
  }

  isLoggedIn() {
    let username = sessionStorage.getItem('username');
    console.log("---------"+username+"---------");
    console.log(sessionStorage.getItem('token'));
    return !(username==null);
  }

  logout() {
    sessionStorage.clear();
  }
}