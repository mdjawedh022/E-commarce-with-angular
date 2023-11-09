import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Login, signUp } from 'data-type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.user.reloadSeller();
  }
  showLogin = false;
  SignUp(data: signUp) {
    this.user.SignUp(data);
  }

  Login(data: Login) {
    this.user.Login(data);
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
