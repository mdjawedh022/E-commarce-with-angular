import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  kidsData:Array<{
    id: number,
    image:string,
    name:string,
    text:string,
    price:number,
    disc_price:number,
    price_off:number ,
    cat:string,
    for:string
  }>=[];
  filteredData: Array<{
    id: number,
    image:string,
    name:string,
    text:string,
    price:number,
    disc_price:number,
    price_off:number ,
    cat:string,
    for:string
  }>=[];
  selectedCategories: Set<string> = new Set();

  selectedSort: string = 'lowToHighPrice'; 
  constructor(private dataService: DataService,private router: Router,
    private cartService: CartService,) {}

  ngOnInit() {
    this.loadData();
   
}
loadData(){
  this.dataService.getKidsData().subscribe((data:any) => {
    this.kidsData = data; // Initialize with all products
  this.filteredData=data
  this.sortProducts(); // Sort products on load
  });
  console.log(this.kidsData)
} toggleCategoryFilter(cat: string) {
  if (cat === 'All') {
    if (this.selectedCategories.has('All')) {
      this.selectedCategories.clear();
    } else {
      this.selectedCategories.clear();
      this.selectedCategories.add('All');
    }
  } else {
    if (this.selectedCategories.has(cat)) {
      this.selectedCategories.delete(cat);
    } else {
      this.selectedCategories.add(cat);
      this.selectedCategories.delete('All');
    }
  }
 

  this.applyCategoryFilter();
}

isCategorySelected(cat: string) {
  return this.selectedCategories.has(cat);
}

applyCategoryFilter() {
  this.filteredData = this.kidsData.filter((item: any) => {
    if (this.selectedCategories.size === 0) {
      return true; // Show all products if no checkboxes are selected
    } else if (this.selectedCategories.has('All')) {
      return true; // Show all products if 'All' is selected
    } else {
      return this.selectedCategories.has(item.cat);
    }
  });
}


sortProducts() {
  if (this.selectedSort === 'lowToHighPrice') {
    this.filteredData.sort((a, b) => a.price - b.price);
  } else if (this.selectedSort === 'highToLowPrice') {
    this.filteredData.sort((a, b) => b.price - a.price);
  } else if (this.selectedSort === 'lowToHighDiscount') {
    this.filteredData.sort((a, b) => a.disc_price - b.disc_price);
  } else if (this.selectedSort === 'highToLowDiscount') {
    this.filteredData.sort((a, b) => b.disc_price- a.disc_price);
  }
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