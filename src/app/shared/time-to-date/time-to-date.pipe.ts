import {Pipe, PipeTransform} from '@angular/core';
// @ts-ignore
import * as moment from 'jalali-moment';

@Pipe({
  name: 'timeToDate'
})
export class TimeToDatePipe implements PipeTransform {

  transform(value: any): any {
    let dateTimeString = moment(value).format('YYYY-MM-DD');
    return moment(dateTimeString, 'YYYY-MM-DD').locale('fa').format('YYYY/MM/DD');
  }

}
