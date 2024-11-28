import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightdataService } from '../flightdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manageflights',
  templateUrl: './manageflights.component.html',
  styleUrls: ['./manageflights.component.css']
})
export class ManageflightsComponent implements OnInit {

  flights : any;

  constructor(private service: FlightdataService, private router: Router) { }

  ngOnInit() {
    let response = this.service.getFlightsforAdmin();
    response.subscribe((data:any) => this.flights = data);
  }

  updateFlight(flightNo:any){
      console.log(flightNo);
      this.router.navigate(["updateflights",flightNo]);
    }


  public deleteFlights(flightNo : any){
    Swal.fire({
      title:'Are you Sure?',
      text:'',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes',
      cancelButtonText:'Cancel'

    }).then((result) => {
      if(result.value) {
        let response = this.service.deleteFlight(flightNo);
    response.subscribe((data:any) => this.flights=data);
      (<any>this.router).navigate(["/manageflights"]);  
        alert("Flight deleted Successfully");
      }
    })
    //public deleteFlights(flightNo : any){
    // let response = this.service.deleteFlight(flightNo);
    // response.subscribe((data:any) => this.flights=data);
    //   (<any>this.router).navigate(["/manageflights"])  
    //     alert("Flight deleted Successfully")
  }

}

