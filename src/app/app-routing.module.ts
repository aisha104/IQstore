import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategorizedProductsComponent } from './categorized-products/categorized-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { DealsComponent } from './deals/deals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'homepage', pathMatch:'full'},
  { path:'homepage', component:HomepageComponent},
  { path:'home', component:HomeComponent},
  { path:'deals', component:DealsComponent},
  { path:'best-sellers', component:BestSellersComponent},
  { path:'categories', component:CategoriesComponent},
  { path:'categorized-products/:product_category_id', component:CategorizedProductsComponent},
  { path:'products', component:ProductsComponent},
  { path:'cart', component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
