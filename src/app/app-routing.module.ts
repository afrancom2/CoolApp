import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsProductComponent } from './producto/details-product/details-product.component';
import { Error404Component } from './error404/error404.component';
import { ProductListComponent } from './producto/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'productos', component: ProductListComponent},
  {path: 'productos/:id', component: DetailsProductComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
