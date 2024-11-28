import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-updateflights',
  templateUrl: './updateflights.component.html',
  styleUrls: ['./updateflights.component.css']
})
export class UpdateflightsComponent implements OnInit {

  //flight : Flight = new Flight("", "", "", "", 0, 0, "");
  //flightNo:any;
  //flight : Flight = new Flight("", "", "", "", 0, 0, "");
  //flightNo:any;
  flightNo!: String;
  flight: Flight = new Flight();
  message:any;

  //constructor(private service: FlightdataService, private router: Router) { }
  constructor(private service: FlightdataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.flightNo = this.route.snapshot.params['flightNo'];
    this.service.getFlightByno(this.flightNo).subscribe( data => {
     
      this.flight = data;
      console.log(this.flight);
      
    }, error => console.log(error));
  }

  
  async updateFlight() {
    await this.service.updateFlights(this.flightNo, this.flight).subscribe( data => {
      
    })
    console.log("Welcome");
    
    alert("Flight Updated Successfully")
    this.router.navigate(['/manageflights']);
    
  }

  // goToManageFlights() {
  //   this.router.navigate(['/manageflights']);
  //   alert("Flight Updated Successfully")
  // }

  

  // public updateFlight() {
  //   let response = this.service.addNew(this.flight);
  //   response.subscribe((data:any) => {
  //     this.message = data;
  //     console.warn("data",data);
  //     (<any>this.router).navigate(["/manageflights"])  
  //       alert("Flight Updated Successfully")
  //   });
  // }

    

}
