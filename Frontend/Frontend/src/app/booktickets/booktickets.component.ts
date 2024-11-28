import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Flight } from '../flight';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent implements OnInit {

  // bookingform!: FormGroup;
  flightNo!: String;
  flight: Flight = new Flight();
  book: Booking = new Booking();
  message:any;
  bookdata: any;
  book1: any;
  flight1: any;

  //constructor(private service: FlightdataService, private router: Router) { }
  constructor(private service: FlightdataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.flightNo = this.route.snapshot.params['flightNo'];
    this.service.getFlightByNo(this.flightNo).subscribe( data => {
      this.flight = data;
      console.log(this.flight);
      console.log(this.flight.flightNo);
      
      

    }, error => console.log(error));
 
  }

  bookTicket() {
    // console.log(this.book);
    // console.log(this.flight);
    
     let book1=this.book;
     let flight1=this.flight;
     let book2 = Object.assign(book1, flight1)
     console.log((book2));
      this.service.bookNow(book2).subscribe( data => {
        console.log(data);
      
    })
    alert("Ticket Booking Successful");
    this.router.navigate(['/userticketinfo']);
    
  
  }

}
