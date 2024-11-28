import { Component, OnInit } from '@angular/core';
import { FlightdataService } from '../flightdata.service';

@Component({
  selector: 'app-adminuserdetails',
  templateUrl: './adminuserdetails.component.html',
  styleUrls: ['./adminuserdetails.component.css']
})
export class AdminuserdetailsComponent implements OnInit {
  userdata: any[] = [];

  constructor(private ser: FlightdataService) { }

  ngOnInit(): void {
    this.loadUserData();  // Load user data when the component initializes
  }

  loadUserData(): void {
    this.ser.getuserbyadmin().subscribe((data: any) => {
      console.log(data);
      this.userdata = data;
    });
  }

  deleteUser(id: any): void {
    if (confirm("Are you sure you want to delete this user?")) {
      this.ser.delete(id).subscribe(() => {
        alert("User Deleted Successfully");
        this.loadUserData();  // Refresh user data after deletion
      });
    }
  }
}
