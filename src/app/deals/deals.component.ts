import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Deal } from '../deal';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
    // this.getDeals();
  }

  // getDeals(): void {
  //   this.productService.getDeals()
  //   .subscribe(deals=>this.deals=deals);
  // }

  goBack(){
    this.location.back();
  }
}
