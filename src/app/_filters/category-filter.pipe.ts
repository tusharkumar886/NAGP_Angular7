import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilterPipe'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText || searchText === 'All') return items;
    return items.filter( it => {
      return it.category === searchText;
    });
  }

}
