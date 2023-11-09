import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { product } from 'data-type';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: undefined | product[];
  searchQuery: string = '';
  constructor(
    private activteRoute: ActivatedRoute,
   private router: Router,
    private dataService: DataService,
    private cartService:CartService,
  ) {}

  //   ngOnInit(){
  // let query =this.activteRoute.snapshot.paramMap.get('query');
  // console.log(query);
  // query && this.dataService.searchProducts(query).subscribe((result)=>{
  //   this.searchResult=result;
  // })
  //   }

  ngOnInit() {
    this.activteRoute.params.subscribe((params) => {
      this.searchQuery = params['query'];
      this.performSearch(this.searchQuery);
    });
  }

  performSearch(query: string) {
    this.dataService.searchList(query).subscribe((val) => {
      if (val) {
        this.searchResult = val;
      }
    });
  }

  // Navigate to the product detail page with the product ID as a parameter
  navigateToProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  // add to cart
  addToCart(item: any) {
    const data = item; // Replace with your data
    this.cartService.postToCart(data).subscribe(
      (response) => {
        console.log('POST request successful', response);
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
