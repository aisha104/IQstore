import { Product } from './../product';
import { ProductService } from 'src/app/product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-best-sellers-shared',
  templateUrl: './best-sellers-shared.component.html',
  styleUrls: ['./best-sellers-shared.component.css']
})
export class BestSellersSharedComponent implements OnInit {

  products:Product[]=[];
  @Input() numberOfBestSellers? :number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts(this.numberOfBestSellers!);
  }

  getProducts(numberOfBestSellers: number) {
    if(numberOfBestSellers!==null) {
      this.productService.getProducts()
      .subscribe(products=>this.products=products.slice(0,numberOfBestSellers));
    }
    else {
      this.productService.getProducts()
      .subscribe(products=>this.products=products);
    }
  }

}
