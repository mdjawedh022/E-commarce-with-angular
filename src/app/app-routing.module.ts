import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';

import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'men', component: MensComponent },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: 'user', component: UserComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'seller-home', component: SellerHomeComponent },
  { path: 'seller-add-product', component:SellerAddProductComponent  },
  { path: 'seller-update-product', component: SellerUpdateProductComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
