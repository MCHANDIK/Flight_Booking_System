import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from '../cls/mobile';
import { Otp } from '../cls/otp';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:8090/otp/send-otp";
  
  private baseUrl1="http://localhost:8090/otp/validate-otp";
  croplogin(mobile:Mobile):Observable<Object>{

      console.log(mobile);

      return this.http.post(`${this.baseUrl}`,mobile);

  }

   getdata(){
      
    return this.http.get('http://localhost:8096/api/crops');

   }

   otp(valid:Otp):Observable<Object>{

    console.log(valid);

    return this.http.post(`${this.baseUrl1}`,valid);

}


  
}
