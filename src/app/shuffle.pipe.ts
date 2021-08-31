import { Category } from './category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(categories: Category[]){
    let currentIndex=categories.length;
    while(0!==currentIndex){
    const randomIndex=Math.floor(Math.random() * currentIndex); 
    currentIndex --; 

    [categories[currentIndex], categories[randomIndex]]=[categories[randomIndex], categories[currentIndex]];
    }
    return categories;
  }


}
