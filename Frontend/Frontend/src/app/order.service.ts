import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = "http://localhost:9098/pg/createOrder";

  constructor(private http: HttpClient) { }

  createOrder(amount: any): Observable<any> {
    const orderData = {
      amount: amount
      // Add other necessary fields if required by the backend
    };
    
    return this.http.post<any>(this.apiUrl, orderData, httpOptions);
  }


  getTicket() {
    let userId = sessionStorage.getItem('username');
    return this.http.get("http://localhost:8089/user/getorder/"+userId);
  }
}
