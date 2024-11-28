import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.css']
})
export class SearchflightsComponent implements OnInit {

 flights: any;
 flightFrom: any;
 flightTo: any;
 date: any;

  constructor(private service: FlightdataService, private router:Router) { }

  ngOnInit(): void {
    this.flights=this.service.getFlightsall().subscribe((data:any)=>this.flights=data);
   }
 
   public searchFrom() {
     console.log('printeddddddd')
     let response= this.service.getFlightsbyfrom(this.flightFrom);
     response.subscribe((data:any) => this.flights=data);
     console.log(this.flights)
   }
 
   public searchTo() {
     let response= this.service.getFlightsbyto(this.flightTo);
     response.subscribe((data:any) => this.flights=data);
   }

   searchbw(fromFlight:any,toFlight:any, date:any) {
      console.log(fromFlight,toFlight, date)
      let response= this.service.getFlightsbw(fromFlight,toFlight, date);
     response.subscribe((data:any) => this.flights=data);


   }


   backNavigation()
  {
    this.router.navigateByUrl("/home")
  }
}
