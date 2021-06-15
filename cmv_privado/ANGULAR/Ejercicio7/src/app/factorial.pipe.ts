import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value:number): string  {
    var fc = 1;
    for(var i=1; i<=value; i++ ){
      fc *= i;
    }
    return "Resultado factorial: " + fc;
  }

}
