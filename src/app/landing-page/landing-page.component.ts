import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'data-type';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  searchResult: undefined | product[];
 

  constructor(private router: Router, private dataService: DataService) {}

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const elem = query.target as HTMLInputElement;
      this.dataService.searchProducts(elem.value).subscribe((result) => {
        // console.log(result);
     if(result.length>5){
      result.length=5
     }
    if(result.length>0){
      this.searchResult = result;
    }
      });
    }
  }
  hide() {
    this.searchResult = undefined;
  }
  submitSearch(val:string){
console.log(val);
this.router.navigate([`search/${val}`])

  }
}
