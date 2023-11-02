import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

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
    private dataService: DataService,
    private cartService:CartService,
    private router: Router,
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


  addToCart(item: any) {
    const data = item; // Replace with your data
    this.cartService.postToCart(data).subscribe(
      (response) => {
        console.log('POST request successful', response);
        this.router.navigate(['/cart'])
        alert('Item added to the cart!');
       

        // Handle the response from the server
      },
      (error) => {
        console.error('POST request failed', error);
        // Handle the error
      }
    );
  }

 
}
