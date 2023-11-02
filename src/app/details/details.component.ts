import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: any;
  products: Array<{
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

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id']; // Access the product ID from route parameters
      // Fetch all product details from your data service
      this.dataService.getAllProducts().subscribe((data: any) => {
        this.products = data;
      });
    });
  }
}
