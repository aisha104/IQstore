import { Component, OnInit, Input } from '@angular/core';
import { Deal } from 'src/app/deal';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-deals-shared',
  templateUrl: './deals-shared.component.html',
  styleUrls: ['./deals-shared.component.css']
})
export class DealsSharedComponent implements OnInit {

  deals:Deal[]=[];
  @Input() numberOfDealsChild?:number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getDeals(this.numberOfDealsChild!);
  }

  getDeals(numberOfDealsChild: number): void {
    if(numberOfDealsChild!==null)
    {
      this.productService.getDeals()
      .subscribe(deals=>this.deals=deals.slice(0,numberOfDealsChild));
    }
    else {
      this.productService.getDeals()
      .subscribe(deals=>this.deals=deals);
    }
   
  }


}
