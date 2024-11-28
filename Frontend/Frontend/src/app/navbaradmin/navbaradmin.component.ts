import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

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
