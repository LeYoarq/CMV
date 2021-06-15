import { Pipe, PipeTransform } from '@angular/core';

// Definimos PIPE personalizado como:  una clase "decorada" con metadatos de pipe

@Pipe({  // Debe usarse el decorador @Pipe 
  name: 'divisionEntera'  // este nombre lo usaremos en los templates que queramos
})
export class DivisionEnteraPipe implements PipeTransform {

  // DEBE de implementar el método "transform" del Interface PipeTransform. Este método toma un valor con unos parámetros y lo devuelve transformado
  // transform(value: any, args?: any): any {  --> ASí está al crearlo
  transform(value:number, divisor:string): string {
    let div = parseFloat(divisor);
    let cociente = Math.floor(value/div);
    let resto = value % div;

    return "Cociente: " + cociente + " # Resto: " + resto;
  }
  // Obtiene y devuelve la división sin decimales y el resto

  dividendo:number;
  divisor:number;
  
}
