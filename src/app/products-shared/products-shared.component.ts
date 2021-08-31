import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-shared',
  templateUrl: './products-shared.component.html',
  styleUrls: ['./products-shared.component.css']
})
export class ProductsSharedComponent implements OnInit {

  @Input() products:Product[]=[];

  constructor() { }

  ngOnInit(): void {   
    
  }

}
