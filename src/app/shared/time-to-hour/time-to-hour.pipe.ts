import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
@Pipe({
  name: 'timeToHour'
})
export class TimeToHourPipe implements PipeTransform {

  transform(value: any): any {
    let dateTimeString = moment(value).format('YYYY-MM-DD HH:MM');
    return moment(dateTimeString, 'YYYY-MM-DD HH:MM').locale('fa').format('YYYY/MM/DD HH:MM');
  }

}
