import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getProductDetails(productId: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getMenData() {
    return this.http.get(`${this.baseUrl}/data?for=men`);
  }

  getWomenData() {
    return this.http.get(`${this.baseUrl}/data?for=women`);
  }
  getKidsData() {
    return this.http.get(`${this.baseUrl}/data?for=kids`);
  }

  getAllProducts() {
    return this.http.get(`${this.baseUrl}/data`);
  }

  searchProducts(query: string) {
    return this.http.get<product[]>(`${this.baseUrl}/data?q=${query}`);
  }
  searchList(query: string) {
    return this.http.get<product[]>(`${this.baseUrl}/data?q=${query}`);
  }

  AddProduct(product: product) {
    this.http.post(`${this.baseUrl}/data`, product).subscribe((val) => {
      if (val) {
        alert('Product added !.');
      }
    });
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}/data/${id}`);
  }

  getProducts() {
    return this.http.get<product[]>(`${this.baseUrl}/data`);
  }
  getProduct(id: string) {
    return this.http.get<product>(`${this.baseUrl}/data/${id}`);
  }
  updateProduct(data: product) {
    return this.http.put<product>(`${this.baseUrl}/data/${data.id}`, data);
  }
}

