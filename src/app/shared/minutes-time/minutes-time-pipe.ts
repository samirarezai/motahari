import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'minutesConverter'})
export class MinutesTimePipe implements PipeTransform {

  transform(value: number): string {
    let newStr: string;
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;
    newStr = minutes + ':' + seconds;
    return newStr;
  }

}
