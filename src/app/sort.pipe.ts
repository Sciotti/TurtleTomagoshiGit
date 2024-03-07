import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): unknown {
    if (value.lenght === 0) {
      return value;
    }
    else {
      return value.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });
      
    }
  }
}
