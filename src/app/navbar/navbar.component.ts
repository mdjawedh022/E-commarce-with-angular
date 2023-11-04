import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { product } from 'data-type';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMobileMenuVisible = false;
  searchResult: undefined | product[];
  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }

  constructor(private router: Router, private dataService: DataService) {}

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const elem = query.target as HTMLInputElement;
      this.dataService.searchProducts(elem.value).subscribe((result) => {
        console.log(result);
     if(result.length>5){
      result.length=5
     }
     this.searchResult = result;
      });
    }
  }
  hide() {
    this.searchResult = undefined;
  }
}
