import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray=[];
    if(value.length===0 || filterString==='' || propName==='') {
      return value;
    }
    else {
      for(const val of value) {
        if(val[propName]==filterString) {
          resultArray.push(val);
        }
      }
      return resultArray;
    }
  }

}
