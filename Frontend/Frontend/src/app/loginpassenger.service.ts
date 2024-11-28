import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


export class userlogin {
  constructor(
    public  username: String,
    public  password: String,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class LoginPassengerService {

  constructor(private httpClient: HttpClient, private router:Router) {
  }
  // logUser(data: any)
  //  {
  //     return this.httpClient.post<userlogin[]>('http://localhost:8089/user/authenticate',data)
  //  }

  authent(username: string, password: string) {
    return this.httpClient.post<userlogin[]>('http://localhost:8089/user/authenticate',{username: username, password: password})
    .subscribe((userData:any)=> {
      console.log(userData);
      if(userData.jwt=="no") {
        alert("Invalid Credentials");
        this.router.navigate(['userLogin']);
      }
      else {
      sessionStorage.setItem('username',username);
      let token ="Bearer "+userData.jwt;
      sessionStorage.setItem('token', token);
      console.log(token);
      alert("Log-in Successful");
      this.router.navigate(['userhome']);
      }
    }
    );
  }

  getTicket() {
    let userId = sessionStorage.getItem('username');
    return this.httpClient.get("http://localhost:8089/user/getorder/"+userId);
  }

  deleteTicket(pnrId:any) {
    //let userId = sessionStorage.getItem('username');
    return this.httpClient.delete("http://localhost:8089/user/cancelticket/"+pnrId);
  }

  isLoggedIn() {
    let username = sessionStorage.getItem('username');
    console.log("---------"+username);
    console.log(sessionStorage.getItem('token'));
    return !(username==null);
  }


  // logout() {
  //   sessionStorage.clear();
  // }
}