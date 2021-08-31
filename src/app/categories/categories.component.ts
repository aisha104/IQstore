import { Category } from './../category';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
