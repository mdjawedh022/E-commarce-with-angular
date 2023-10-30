import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TrendingitemComponent } from './trendingitem/trendingitem.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    CarouselComponent,
    TrendingitemComponent,
    FooterComponent,
    MensComponent,
    WomenComponent,
    KidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
