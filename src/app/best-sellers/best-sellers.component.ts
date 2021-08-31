import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  
  products!:Product[];

  constructor(private location: Location, private productService: ProductService) { }

  ngOnInit(): void {
    
  }  

  goBack(){
    this.location.back();
  }    
}
