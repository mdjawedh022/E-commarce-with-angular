import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { product } from 'data-type';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isMobileMenuVisible = false;
  isHamburger = false;
  searchResult: undefined | product[];
  cartItemCount: number = 0;
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
  toggleMenu() {
    this.isHamburger = !this.isHamburger;
  }
  constructor(
    private router: Router,
    private dataService: DataService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          let data = localStorage.getItem('seller');
          let sellerData = data && JSON.parse(data);
          this.sellerName = sellerData.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('user')) {
          let data = localStorage.getItem('user');
          let userData = data && JSON.parse(data);
          this.userName = userData.name;
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const elem = query.target as HTMLInputElement;
      this.dataService.searchProducts(elem.value).subscribe((result) => {
        // console.log(result);
        if (result.length > 5) {
          result.length = 5;
        }
        if (result.length > 0) {
          this.searchResult = result;
        }
      });
    }
  }
  logOut() {
    if (this.menuType === 'user' || this.menuType === 'seller') {
      localStorage.removeItem(this.menuType);
      this.router.navigate(['/']);
    }
  }
  hide() {
    this.searchResult = undefined;
  }
  submitSearch(val: string) {
    console.log(val);
    this.router.navigate([`search/${val}`]);
 
  }
}
