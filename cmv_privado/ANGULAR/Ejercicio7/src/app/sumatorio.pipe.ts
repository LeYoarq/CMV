import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumatorio'
})
export class SumatorioPipe implements PipeTransform {

  transform(value:number): string{
    var sm = 0;
    for(var i=1; i<=value; i++ ){
      sm += i;
    }
    return "Resultado sumatorio: " + sm;
  }

}
