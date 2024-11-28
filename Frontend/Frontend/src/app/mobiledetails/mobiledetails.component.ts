import { Component, OnInit } from '@angular/core';
import { MobileService } from '../service/mobile.service';
import { Mobile } from '../cls/mobile';
import { Otp } from '../cls/otp';

@Component({
  selector: 'app-mobiledetails',
  templateUrl: './mobiledetails.component.html',
  styleUrls: ['./mobiledetails.component.css']
})
export class MobiledetailsComponent implements OnInit {

  mobile:Mobile = new Mobile();
  valid:Otp = new Otp();
  flag= false;

  constructor(private mob:MobileService) { }

  ngOnInit(): void {


  }

  addmobile() {
    console.log(this.mobile)
  
    this.mob.croplogin(this.mobile).subscribe(
  
      (data =>{
  
        alert("Items Added Successfully");
        this.flag=!this.flag;

      }),
      error =>alert("Sorry Pl"));
  }


  otp() {

    this.mob.otp(this.valid).subscribe(
  
      (data =>{
  
        alert("Otp  Successfully");
      
      }),
      error =>alert("Otp  Successfully"));
 
    }



}
