import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'men', component: MensComponent },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
