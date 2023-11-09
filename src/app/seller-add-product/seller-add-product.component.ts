import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { product } from 'data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  constructor(private product: DataService) {}

  submit(data: product) {
    this.product.AddProduct(data);
  }
}
