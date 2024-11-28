import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPassengerService } from '../loginpassenger.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private httpClientService:LoginPassengerService) { }

  ngOnInit(): void {
    
  }

}
