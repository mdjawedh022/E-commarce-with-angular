import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login, signUp } from 'data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private route: Router) {}

  SignUp(data: signUp) {
    this.http
      .post('https://weak-bat-sheath-dress.cyclic.app/seller', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result) {
          this.isLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.route.navigate(['seller-home']);
        }
      });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isLoggedIn.next(true);
      this.route.navigate(['seller-home']);
    }
  }

  Login(data: Login) {
    this.http
      .get(
        `https://weak-bat-sheath-dress.cyclic.app/lseller/?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        if (result && result.body && result.body.length) {
          this.isLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(result.body[0]));
          this.route.navigate(['seller-home']);
        } else {
          alert('Login failed !.');
        }
      });
  }
}
