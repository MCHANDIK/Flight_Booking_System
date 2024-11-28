import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightdataService } from '../flightdata.service';


@Component({
  selector: 'app-addflights',
  templateUrl: './addflights.component.html',
  styleUrls: ['./addflights.component.css']
})
export class AddflightsComponent implements OnInit {

  // flight : Flight = new Flight("", "", "", "", 0, 0, "");
  flight : Flight = new Flight();
  message:any;

  constructor(private service: FlightdataService, private router: Router) { }

  ngOnInit(): void {
  }

  // public addFlight() {
  //   let response = this.service.addNew(this.flight);
  //   response.subscribe((data:any) => {
  //     this.message = data;
  //     console.warn("data",data);
  //     (<any>this.router).navigate(["/manageflights"])  
  //       alert("Flight Added Successfully")
  //   });
  // }

  saveFlight() {
    this.service.addNewFlight(this.flight).subscribe( data => {
      console.log(data);
      
    });
    alert("Flight Added Successfully");
    this.router.navigate(['/manageflights']);
  }

  addFlight() {
      console.log(this.flight);
      this.saveFlight();
  }

}
