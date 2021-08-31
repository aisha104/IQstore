import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorized-products',
  templateUrl: './categorized-products.component.html',
  styleUrls: ['./categorized-products.component.css']
})
export class CategorizedProductsComponent implements OnInit {

  products: Product[]=[];

  constructor(private productService: ProductService, private routes: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getCategorizedProducts();
  }

  getCategorizedProducts(): void {
    const product_category_id=Number(this.routes.snapshot.paramMap.get('product_category_id'));
    this.productService.getCategorizedProducts(product_category_id)
    .subscribe(data=>this.products=data);
  }
 
  goBack(){
    this.location.back();
  }
  
}
