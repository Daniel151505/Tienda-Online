import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    // Eleva el exponete al numero especificado
    return Math.pow(value,2);
  }

}
