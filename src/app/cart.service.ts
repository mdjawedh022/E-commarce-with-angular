import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  [x: string]: any;
  private baseUrl = `http://localhost:3000/cart`;
  addToCart: any;
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
  constructor(private http: HttpClient) {}

  // Method to send data to the server using POST
  postToCart(item: any) {
    return this.http.post(`${this.baseUrl}`, item);
  }
  getCartData() {
    return this.http.get(`${this.baseUrl}`);

  }

  getData(){
    this.http.get(`${this.baseUrl}`).subscribe((data:any)=>{

    })
  }
  deleteCartItem(itemId: number) {
    const deleteUrl = `${this.baseUrl}/${itemId}`;
    return this.http.delete(deleteUrl);
  }

cartDeleted(){
  return this.http.delete(`${this.baseUrl}`)
}
  }
  
  
  
  
