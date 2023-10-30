import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = `http://localhost:3000`; 

  constructor(private http: HttpClient) {}

  getMenData() {
    return this.http.get(`${this.baseUrl}/men`);
  }

  getWomenData(){
    return this.http.get(`${this.baseUrl}/women`);
  }
  getKidsData(){
    return this.http.get(`${this.baseUrl}/kids`);
  }
}
