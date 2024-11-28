import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { LoginPassengerService } from '../loginpassenger.service';
import { jsPDF } from 'jspdf';
import { MobileService } from '../service/mobile.service';
import { Mobile } from '../cls/mobile';
import { Otp } from '../cls/otp';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form: any = {
    name: '',
    email: '',
    contact: ''
  };        
  totalPrice: any;
  paymentId!: string;
  error!: string;
  result: any;

  mobile:Mobile = new Mobile();
  valid:Otp = new Otp();
  flag= false;
  
  options: any = {
    "key": "", 
    "amount": "", 
    "name": "Payment",
    "description": "Web Development",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id": "",
    "handler": (response: any) => {
      const event = new CustomEvent("payment.success", 
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );	  
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  bookings: any[] = [];

  constructor(private http: HttpClient, private orderService: OrderService, private router: Router, private service: LoginPassengerService,
    private mob:MobileService
  ) { }

  addmobile() {
    console.log(this.mobile)
  
    this.mob.croplogin(this.mobile).subscribe(
  
      (data =>{
  
        alert(" Otp sent Successfully");
        this.flag=!this.flag;

      }),
      error =>alert("Sorry Invalid Credentials"));
  }


  otp() {

    this.mob.otp(this.valid).subscribe(
  
      (data =>{
  
        alert("Otp  Successfully");
      
      }),
      error =>alert("Otp  Successfully"));
 
    }

  ngOnInit(): void {
    let response = this.service.getTicket();
    response.subscribe((data: any) => {
      this.bookings = data;
      console.log('Bookings:', this.bookings);
      
      if (this.bookings.length > 0) {
        console.log('Fare:', this.bookings[0].fare); // Access the fare of the first booking
      } else {
        console.log('No bookings available');
      }

      this.totalPrice = this.bookings[0].fare;
    });
  }

  onSubmit(): void {
    alert("Payment Successful");
    this.paymentId = ''; 
    this.error = ''; 
    this.orderService.createOrder(this.totalPrice).subscribe(
      data => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; // in paise
        this.options.prefill.name = this.form.name;
        this.options.prefill.email = this.form.email;
        this.options.prefill.contact = this.form.contact;

        const razorpayInstance = new (window as any).Razorpay(this.options);
        razorpayInstance.open();

        razorpayInstance.on('payment.failed', (response: any) => {    
          // Store this information in the server or log it
          console.log(response);
          this.error = response.error.reason;
        });
      },
      err => {
        this.error = err.error.message;
      }
    );
  }

  @HostListener('window:payment.success', ['$event']) 
  onPaymentSuccess(event: { detail: any; }): void {
    console.log(event.detail);
    // Handle payment success logic here
    this.generatePDF(); // Call the method to generate PDF
    this.router.navigate(['/bookingdetails']);  // Redirect to success page
  }

  generatePDF(): void {
    const doc = new jsPDF();
    
    // Set background color (simulate light blue background from the image)
    doc.setFillColor(240, 248, 255); // light blue color
    doc.rect(0, 0, 210, 297, 'F'); // cover the entire page
  
    // Add Title: Plane Ticket Purchase
    doc.setFontSize(18);
    doc.setTextColor(0, 51, 102); // dark blue
    doc.setFont('helvetica', 'bold');
    doc.text("Plane Ticket Purchase", 105, 30, { align: 'center' });
    doc.addImage('https://th.bing.com/th?id=OIP.qKLEYAtWd6GlrBtJkUm7vQAAAA&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2', 'PNG', 10, 10, 20, 20);
    // Draw a horizontal line
    doc.setLineWidth(0.5);
    doc.setDrawColor(100, 100, 100); // grey color
    doc.line(10, 35, 200, 35); // line below title
  
    // Booking Date
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // black color
    doc.setFont('helvetica', 'normal');
    doc.text("Booking Date:", 20, 50);
    doc.setFont('helvetica', 'bold');
    doc.text("Saturday, December 3, 2022", 70, 50);
  
    // Guest Name
    doc.setFont('helvetica', 'normal');
    doc.text("Guest Name:", 20, 60);
    doc.setFont('helvetica', 'bold');
    doc.text(this.form.name || "Vishwa", 70, 60);
  
    // Flight Details Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 51, 102); // dark blue
    doc.text("Flight Details", 20, 80);
    
    // Draw another line under Flight Details
    doc.line(10, 85, 200, 85); // line below flight details
  
    if (this.bookings.length > 0) {
      const booking = this.bookings[0];
  
      // Flight route details (From)
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0, 0, 0); // black color
      doc.text("From:", 20, 100);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.source || 'New York', 60, 100);
  
      // Airline
      doc.setFont('helvetica', 'normal');
      doc.text("Airline:", 20, 110);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.flightName || 'ACME Airlines', 60, 110);
  
      // Departure Date and Time
      doc.setFont('helvetica', 'normal');
      doc.text("Departure Date:", 20, 120);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.departureDate || 'Tuesday, December 20, 2022 06:30', 60, 120);
  
      // Arrival Date and Time
      doc.setFont('helvetica', 'normal');
      doc.text("Arrival Date:", 20, 130);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.arrivalDate || 'Tuesday, December 6, 2022 23:30', 60, 130);
  
      // To (Destination)
      doc.setFont('helvetica', 'normal');
      doc.text("To:", 20, 150);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.destination || 'London', 60, 150);
  
      // Flight Number
      doc.setFont('helvetica', 'normal');
      doc.text("Flight Number:", 20, 160);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.flightNo || 'AA7755', 60, 160);
  
      // Departure Terminal
      doc.setFont('helvetica', 'normal');
      doc.text("Departure Terminal:", 20, 170);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.departureTerminal || 'Terminal 1', 60, 170);
  
      // Arrival Terminal
      doc.setFont('helvetica', 'normal');
      doc.text("Arrival Terminal:", 20, 180);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.arrivalTerminal || 'Terminal 5', 60, 180);
  
      // Seat Class
      doc.setFont('helvetica', 'normal');
      doc.text("Seat Class:", 20, 200);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.seatClass || 'Business Class', 60, 200);
  
      // Extra Baggage Allowance
      doc.setFont('helvetica', 'normal');
      doc.text("Extra Baggage:", 20, 210);
      doc.setFont('helvetica', 'bold');
      doc.text(booking.extraBaggage   || '5' + '8', 60, 210);
  
      // Seat Number
      // doc.setFont('helvetica', 'normal');
      // doc.text("Seat Number:", 20, 220);
      // doc.setFont('helvetica', 'bold');
      // doc.text(booking.seatNo || '3-A', 60, 220);
     
      doc.setFont('helvetica', 'normal');
      doc.text("Fare:", 20, 220);
      doc.setFont('helvetica', 'bold');
      doc.text("Fare: " + (booking.fare || 'N/A'), 60, 220);
  
    } else {
      doc.setFont('helvetica', 'normal');
      doc.text("No bookings available to generate PDF", 20, 100);
    }
  
    // Save the PDF
    doc.save("ticket.pdf");
  }
  
}
