import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './producto/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Error404Component } from './error404/error404.component';
import { DetailsProductComponent } from './producto/details-product/details-product.component';
import { ProductListComponent } from './producto/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomePageComponent,
    Error404Component,
    DetailsProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
