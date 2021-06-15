import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubo'
})
export class CuboPipe implements PipeTransform {

  transform(num1:number, num2:number): string  {
    if(num1 >= num2) return "Resultado cubo: " + num1*num1*num1
    else return "Resultado cubo: " + num2*num2*num2
  }

}
