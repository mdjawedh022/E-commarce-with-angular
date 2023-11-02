import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,private router:Router) {
    this.loginForm = fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.userService.login(email, password).subscribe(
      (user: any) => {
        if (user) {
          alert("Login successful!");
          this.router.navigate(['/'])
          // Redirect or perform other actions for authenticated users
          console.log(user);
          
        } else {
          alert("Login failed!");
        }
      },
      (error) => {
        alert("Login failed!");
        console.log(error);
      }
    );
  }
}
