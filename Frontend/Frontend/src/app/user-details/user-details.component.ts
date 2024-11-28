import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  flights: any;

  constructor(private service: FlightdataService) { }

  ngOnInit(): void {
   this.flights=this.service.getFlights().subscribe((data:any)=>this.flights=data);
  }

  // searchFrom(flightFrom:any) {
  //   let response= this.service.getFlightsbyfrom(flightFrom);
  //   response.subscribe((data:any) => this.flights=data);
  // }

  // searchTo(flightTo:any) {
  //   let response= this.service.getFlightsbyfrom(flightTo);
  //   response.subscribe((data:any) => this.flights=data);
  // }

}
