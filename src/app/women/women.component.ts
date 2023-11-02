import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  womenData: Array<{
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

  selectedCategories:Set<string>=new Set();
  selectedSort:string='lowToHighPrice';

  constructor(private dataService: DataService,private router: Router,
    private cartService: CartService,
) {}

  ngOnInit() {
  this.loadData();
}
loadData(){
  this.dataService.getWomenData().subscribe((data:any) => {
    this.womenData = data;
    this.filteredData=data;
    this.sortProducts();
  });
  console.log(this.womenData)
}
//fiter perform here
toggleCategoryFilter(cat:string){
  if(cat==="All"){
    if(this.selectedCategories.has('All')){
      this.selectedCategories.clear();
    }else{
      this.selectedCategories.clear();
      this.selectedCategories.add('All')
    }
  } else{
    if(this.selectedCategories.has(cat)){
      this.selectedCategories.delete(cat);
    }else{
      this.selectedCategories.add(cat);
      this.selectedCategories.delete(cat);
    }
  }
  this.applyCategoryFilter();
}
isCategorySelected(cat:string){
  return this.selectedCategories.has(cat);
}
applyCategoryFilter(){
  this.filteredData=this.womenData.filter((item:any)=>{
    if(this.selectedCategories.size===0){
      return true //show all products if no checkbox are selected
    }else  if(this.selectedCategories.has('All')){
    return true;
    }else{
      return this.selectedCategories.has(item.cat);
    }
  })
}

sortProducts(){
if(this.selectedSort==='lowToHighPrice'){
  this.filteredData.sort((a,b)=>a.price-b.price);
} else if(this.selectedSort==='highToLowPrice'){
  this.filteredData.sort((a,b)=>b.price-a.price);
} else if(this.selectedSort==='lowToHighDiscount'){
  this.filteredData.sort((a,b)=>a.disc_price-b.disc_price);
}else if(this.selectedSort==='HighToLowDiscount'){
  this.filteredData.sort((a,b)=>b.disc_price-a.disc_price)
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
