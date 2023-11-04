import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  firstName: string='';
  lastName: string='';
  mobile: string='';
  email: string='';
  address: string='';
  state: string='';
  city: string='';
  pincode: string='';
  paymentMethod: string='';
  cart: any[]=[]; // Define the cart data structure according to your application
  getCartData: any;

  constructor(private http: HttpClient, private cartService: CartService,private router:Router) {}

  submitOrder() {
    // Check if any of the required fields are empty
    if (
      !this.firstName ||
      !this.lastName ||
      !this.mobile ||
      !this.address ||
      !this.state ||
      !this.city ||
      !this.pincode ||
      !this.paymentMethod
    ) {
      alert('Please fill in all required fields.');
      return; // Return early to prevent submitting the order
    }
  
    const orderData = {
      firstName: this.firstName,
      lastName: this.lastName,
      mobile: this.mobile,
      email: this.email,
      address: this.address,
      state: this.state,
      city: this.city,
      pincode: this.pincode,
      paymentMethod: this.paymentMethod,
    };
  
    const orderWithCartData = {
      order: orderData,
      cart: this.getCartData,
    };
  
    this.http
      .post('http://localhost:3000/order', orderWithCartData)
      .subscribe(
        (response) => {
          console.log('Order submitted successfully:', response);
          // this.cartService.clearCart();
          alert('Order successfully');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error submitting the order:', error);
        }
      );
  }
  
}
