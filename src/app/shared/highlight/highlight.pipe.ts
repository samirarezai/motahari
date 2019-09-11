import {Pipe, PipeTransform} from '@angular/core';
import {split} from 'ts-node';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args?: any, isSameWord?: boolean): any {
    if (!args) {
      return value;
    }
    let words = args.split(' ');
    if (words.length > 1 && !isSameWord) {
      let queryList = args.split(' ').filter(String);
      let re = new RegExp(queryList.join('|'), 'gi');
      // let re = new RegExp(words[i], 'gi');
      return value.replace(re, (x) => '<mark class="mark-text">' + x + '</mark>');
    } else {
      let re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
      return value.replace(re, '<mark class="mark-text">' + args + '</mark>');
    }

    /*if (!args) {
      return value;
    }
    // Match in a case insensitive maneer
    const re = new RegExp(args, 'gi');
    const match = value.match(re);

    // If there's no match, just return the original value.
    if (!match) {
      return value;
    }

    const value = value.replace(re, '<mark>' + match[0] + '</mark>');
    return this.sanitizer.bypassSecurityTrustHtml(value);*/
  }

}
