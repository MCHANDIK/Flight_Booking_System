import { Component, OnInit } from '@angular/core';
import { LoginPassengerService } from '../loginpassenger.service';

@Component({
  selector: 'app-userticketinfo',
  templateUrl: './userticketinfo.component.html',
  styleUrls: ['./userticketinfo.component.css']
})
export class UserticketinfoComponent implements OnInit {

  bookings : any;
  length: any;
  constructor(private serv:LoginPassengerService) { }

  ngOnInit(): void {
    // let response = this.serv.getTicket();
    // console.log(response);
    // response.subscribe((data:any) => this.bookings = data);
    // console.log(this.bookings);
    this.bookingdata();
    
  }
  async bookingdata() {
  let response = this.serv.getTicket();
  console.log(response);
  await response.subscribe((data:any) => { this.bookings = data;
  this.length=this.bookings.length-1 }  );
  console.log("length",this.bookings.length());
  
  }

}
