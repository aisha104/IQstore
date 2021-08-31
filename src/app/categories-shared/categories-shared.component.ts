import { Category } from './../category';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories-shared',
  templateUrl: './categories-shared.component.html',
  styleUrls: ['./categories-shared.component.css']
})
export class CategoriesSharedComponent implements OnInit {

  categories:Category[]=[];
  @Input() numberOfCategories?:number;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories(this.numberOfCategories!);
  }

  getCategories(numberOfCategories: number): void {
    if(numberOfCategories!==0){
      this.productService.getCategories()
      .subscribe(categories=>this.categories=categories.slice(0,numberOfCategories));
    }
    else {
      this.productService.getCategories()
      .subscribe(categories=>this.categories=categories);
    }
  }


}
