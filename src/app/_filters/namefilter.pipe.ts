import { Pipe, PipeTransform } from '@angular/core';
import {IStudent} from "../_models/Student";
import { User } from '../_models/User';

@Pipe({
  name: 'nameFilterPipe'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
