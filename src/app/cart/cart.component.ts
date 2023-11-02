import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartData: Array<{
    id: number,
    image: string,
    name: string,
    text: string,
    price: number,
    disc_price: number,
    price_off: number,
    cat: string,
    for: string
  }> = [];
  totalProductPrice: number = 0;
  totalDiscountPrice: number = 0;

  constructor(private cartService: CartService) { };

  ngOnInit() {
    this.showData()
  }

  showData() {
    this.cartService.getCartData().subscribe((data: any) => {
      this.cartData = data;
      console.log(data);
      this.updateCartTotal();
    })
  }

  deleteItem(item: any) {
    // Delete the item locally
    const index = this.cartData.indexOf(item);
    if (index !== -1) {
      this.cartData.splice(index, 1);
      this.updateCartTotal();
    }
  
    // Delete the item remotely by calling the service method
    this.cartService.deleteCartItem(item.id).subscribe(
      () => {
        alert('Item deleted on the server.');
      },
      (error) => {
        console.error('Error deleting item on the server: ', error);
      }
    );
  }
  

  updateCartTotal() {
    let totalPrice: number = 0;
    let discountPrice: number = 0;

    for (const item of this.cartData) {
      totalPrice += item.price;
      discountPrice += item.disc_price;
    }

    this.totalProductPrice = totalPrice;
    this.totalDiscountPrice = discountPrice;
  }

  checkout() {
    if (this.cartData.length === 0) {
      alert('Your cart is empty. Please add items before checking out.');
    } else {
      // Implement your checkout process here, e.g., send data to a server, redirect to a payment gateway, etc.

      // For this example, we'll display the total price and clear the cart:
      alert('Thank you for your order. Your total price is ₹' + (this.totalProductPrice - this.totalDiscountPrice));
      this.cartData = [];
      this.totalProductPrice = 0;
      this.totalDiscountPrice = 0;
    }
  }
}
