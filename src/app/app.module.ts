import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { DealsComponent } from './deals/deals.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorizedProductsComponent } from './categorized-products/categorized-products.component';
import { ProductsComponent } from './products/products.component';
import { ShufflePipe } from './shuffle.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DealsSharedComponent } from './deals-shared/deals-shared.component';
import { CategoriesSharedComponent } from './categories-shared/categories-shared.component';
import { BestSellersSharedComponent } from './best-sellers-shared/best-sellers-shared.component';
import { ProductsSharedComponent } from './products-shared/products-shared.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    DealsComponent,
    BestSellersComponent,
    CategoriesComponent,
    CategorizedProductsComponent,
    ProductsComponent,
    ShufflePipe,
    SortPipe,
    FilterPipe,
    HeaderComponent,
    DealsSharedComponent,
    CategoriesSharedComponent,
    BestSellersSharedComponent,
    ProductsSharedComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
