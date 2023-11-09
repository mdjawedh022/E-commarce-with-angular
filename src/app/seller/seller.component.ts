import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, signUp } from 'data-type';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent {
  constructor(private seller: SellerService, private route: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  showLogin = false;
  SignUp(data: signUp) {
    this.seller.SignUp(data);
  }

  Login(data: Login) {
    this.seller.Login(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
