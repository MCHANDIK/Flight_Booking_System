import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-availableflights',
  templateUrl: './availableflights.component.html',
  styleUrls: ['./availableflights.component.css']
})
export class AvailableflightsComponent implements OnInit {

  flights : any;

  constructor(private service: FlightdataService, private router: Router) { }

  ngOnInit(): void {
    let response = this.service.getFlights();
    response.subscribe((data:any) => this.flights = data);
  }

  bookTicket(flightNo:String) {
    console.log(flightNo);
    this.router.navigate(["booktickets", flightNo]);
  }

  select(){
    
  }
}
