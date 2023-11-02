import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signupForm:FormGroup;
constructor( private router: Router, private fb:FormBuilder,private userService:UserService){
  this.signupForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
};
 // Custom password matching validator
 passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }

  return null;
}

onSubmit(){
  if(this.signupForm.valid){
    const user=this.signupForm.value;
    this.userService.registerUser(user).subscribe(
      (Response)=>{
        alert('User registered:')
        console.log('User registered:',Response);
        this.router.navigate(['/login'])
      },
      (error)=>{
        console.log("Registration Failed:",error);
        
      }
    )
  }
}


}
