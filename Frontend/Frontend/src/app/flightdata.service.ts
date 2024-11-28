import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import {Flight } from './flight';
import { HttpClientModule } from '@angular/common/http';
// export classFlights {
//   constructor(
//    public  flightNo: String,
// 	  public  flightName: String,
// 	  public  flightFrom: String,
// 	  public  flightTo: String,
// 	  public  fare: number,
// 	  public  seats: number,
// 	  public  time: String
//   ) {
//   }
// }


@Injectable({
  providedIn: 'root'
  
})

export class FlightdataService {
  deleteuser(id: any) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = "http://localhost:8089/user/viewflight";
  private baseUrl1 = "http://localhost:8088/admin/updateflight";

  constructor(private http:HttpClient) { }
  
  public getuserbyadmin(){
    return this.http.get(" http://localhost:8088/admin/viewallusers");
  }
  public getFlights() {
    return this.http.get("http://localhost:8089/user/viewallflights");
  }

  getFlightsall() {
    return this.http.get("http://localhost:8150/flight/viewallflights");
  }
  

  getFlightsforAdmin() {
    return this.http.get("http://localhost:8088/admin/viewallflights");
  }
  
public getBookings() {
  return this.http.get("http://localhost:8150/user/getallorders");
}

  public deleteFlight(flightNo:any){
    return this.http.delete("http://localhost:8088/admin/deleteflight/"+flightNo);
  }

  public delete(userId:any){
    return this.http.delete("http://localhost:8088/admin/deleteuser/"+userId);
  }

  addNewFlight(flight:Flight): Observable<Object> {
    return this.http.post("http://localhost:8088/admin/addflight", flight);
  }

  getFlightByno(flightNo:String): Observable<Flight> {
    return this.http.get<Flight>("http://localhost:8088/admin/viewflightbyno/"+flightNo);
  }

  getFlightByNo(flightNo:String): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/${flightNo}`);
  }

  updateFlights(flightNo:String, flight:Flight): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${flightNo}`, flight);
  }

  bookNow(book: Booking): Observable<Object> {
    return this.http.post("http://localhost:8089/user/bookticket", book);
  }

  getFlightsbyfrom(flightFrom:any) {
    return this.http.get("http://localhost:8087/flight/findfrom/"+flightFrom);
  }

  getFlightsbyto(flightTo:any) {
    return this.http.get("http://localhost:8087/flight/findto/"+flightTo);
  }

  getFlightsbw(fromFlight:any,toFlight:any, date:any) {
    return this.http.get("http://localhost:8087/flight/findbw/"+fromFlight+'/'+toFlight+'/'+date);

  }

}