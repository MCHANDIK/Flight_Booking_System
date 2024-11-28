import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPassengerService } from '../loginpassenger.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {

  bookings: any[] = []; // Initialize as an array

  constructor(
    private service: LoginPassengerService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    let response = this.service.getTicket();
    response.subscribe((data: any) => {
      this.bookings = data;
      // console.log('Bookings:', this.bookings);
      
      // if (this.bookings.length > 0) {
      //   console.log('Fare:', this.bookings[0].fare); // Access the fare of the first booking
      // } else {
      //   console.log('No bookings available');
      // }
    });
  }

  cancelTicket(pnrId: any) {
    Swal.fire({
      title: 'Are you Sure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
      
    }).then((result) => {
      if (result.value) {
        let response = this.service.deleteTicket(pnrId);
        this.router.navigate(["/searchflights"]);
        response.subscribe((data: any) => {
          this.bookings = data;
          this.router.navigate(["/searchflights"]);
          Swal.fire("Ticket Cancelled Successfully");
        });
      }
    });
  }
}
