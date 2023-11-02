import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  baseUrl='http://localhost:3000';

  constructor(private http:HttpClient) { }
///register 
  registerUser(user:any){
    return this.http.post(`${this.baseUrl}/users`,user)
  }


//login
login(email: string, password: string) {
  return this.http.get<any[]>(`${this.baseUrl}/users`).pipe(
    map((users) => users.find((user) => user.email === email && user.password === password))
  );
}

// ...

}
