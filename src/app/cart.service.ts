import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // cartItem: any[] = [];
 
  private baseUrl = `http://localhost:3000/cart`; 
  addToCart: any;

  constructor(private http: HttpClient) {};


  // Method to send data to the server using POST
  postToCart(item: any) {
 
    return this.http.post(`${this.baseUrl}`, item);
  }
  getCartData(){
  return this.http.get(`${this.baseUrl}`);
}
deleteCartItem(itemId: number) {
  const deleteUrl = `${this.baseUrl}/${itemId}`;
  return this.http.delete(deleteUrl);
}

}
