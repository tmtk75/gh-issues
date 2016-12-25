import * as moment from "moment";

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).fromNow();
  }

}
