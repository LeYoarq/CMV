import { Injectable } from '@angular/core';
import { PedidosEmp } from './pedidosEmp';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class Comp2Service {

  constructor() { }

  getImportes() {
    const pd1 = new PedidosEmp(1,"2/02/2002",123);
    const pd2 = new PedidosEmp(2,"21/12/2012",321);

    var suma:number = pd1.getImporte() + pd2.getImporte();

    document.write("<p> PARTE 2: </p><p> Importe TOTAL de los pedidos: " + suma + " leuros</p>");
  }
}
