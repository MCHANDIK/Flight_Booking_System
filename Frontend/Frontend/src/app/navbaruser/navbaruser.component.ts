import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  logout() {
    Swal.fire({
      title:'Are you Sure?',
      text:'',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes',
      cancelButtonText:'Cancel'

    }).then((result) => {
      if(result.value) {
        sessionStorage.clear();
        this.router.navigate(['/home']);
      }
    })
   }
  
}
