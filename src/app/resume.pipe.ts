import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }*/

  maLimite: number;
  transform(value: any, limit?: number): any {
    if (!value)
      return null;
    this.maLimite = (limit) ? limit : 30;
    /*if (limit == null)
      limit = 10;*/
    return value.substr(0, this.maLimite) + '...';
  }

}
