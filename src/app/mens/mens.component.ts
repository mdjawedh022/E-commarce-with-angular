import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
})
export class MensComponent implements OnInit {
  menData: Array<{
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


  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getMenData().subscribe((data:any) => {
      this.menData = data;
      this.filteredData = data; // Initialize with all products
      this.sortProducts(); // Sort products on load
    
    });
    console.log(this.menData);
  }

  toggleCategoryFilter(cat: string) {
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
    this.filteredData = this.menData.filter((item: any) => {
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

  
}
