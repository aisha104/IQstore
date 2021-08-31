import { Product } from './product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, sortField: any, sortDirection: any): any{
    let multiplier=1;

    if(sortDirection=='desc') {
      multiplier=-1;
    }
    return value.sort((a: any, b: any)=>{
      if(a[sortField] < b[sortField]){
        return -1 * multiplier;
      }
      else if(a[sortField] > b[sortField]){
        return 1 * multiplier;
      }
      else {
        return 0;
      } 
    });
  }

}
