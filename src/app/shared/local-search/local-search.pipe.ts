import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localSearch'
})
export class LocalSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
