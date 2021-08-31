import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];

  constructor(private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts() {
    this.productService.getProducts()
    .subscribe(products=>this.products=products);
  }

  goBack(){
    this.location.back();
  }
}
