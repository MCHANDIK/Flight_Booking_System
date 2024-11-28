import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterpassengerService } from '../registerpassenger.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent implements OnInit {
  adminlog = new FormGroup({
    //  id: new FormControl('',Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private httpClientService: RegisterpassengerService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  validate() {
    //console.warn(this.addResto.value)
    this.httpClientService
      .regUser(this.adminlog.value)
      .subscribe((result: any) => {
        console.warn('result', result);
        if (result.success == 0) {
          alert('Username already Existed, Try different one');
          (<any>this.router).navigate(['/userreg']);
        } else {
          alert('Registration Successful');
          (<any>this.router).navigate(['/userLogin']);
        }
      });
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById(
      'floatingPassword'
    ) as HTMLInputElement;
    const showPasswordCheckbox = document.getElementById(
      'showPassword'
    ) as HTMLInputElement;

    if (showPasswordCheckbox.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
}
