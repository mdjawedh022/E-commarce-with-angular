import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { product } from 'data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent {
  constructor(
    private route: ActivatedRoute,
    private r: Router,
    private service: DataService
  ) {}

  productData: undefined | product;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    id &&
      this.service.getProduct(id).subscribe((data) => {
        this.productData = data;
      });
  }

  submit(data: product) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.service.updateProduct(data).subscribe((result) => {
      if (result) {
        alert('Product Updated !.');
        this.r.navigate(['seller-home']);
      }
    });
  }
}
