import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  x: any;

  adminlog=new FormGroup(
    {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
        
    })
    constructor(private httpClientService: AdminloginService,private router:Router) { }
  
    ngOnInit(): void {
    }
    // validate()
    // {
    //   //console.warn(this.addResto.value)
    //   this.httpClientService.saveResto(this.adminlog.value).subscribe((result: any)=>{
    //   console.warn("result",result)    
    //     this.x=result
    //     console.warn(this.x.jwt)
    //     if(this.x.jwt=="no"){
          
    //       (<any>this.router).navigate(["/AdminLogin"])  
    //       alert("Invalid Credentials");
    //     }
    //     else
    //     {
          
    //       (<any>this.router).navigate(["/adminhome"]) 
    //       alert("Welcome!");
                
    //     }
    // })
    // }

    validate() {
      this.httpClientService.authent(this.adminlog.value.username, this.adminlog.value.password);
    }

    togglePasswordVisibility() {
      const passwordInput = document.getElementById('floatingPassword') as HTMLInputElement;
      const showPasswordCheckbox = document.getElementById('showPassword') as HTMLInputElement;
  
      if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    }

  }