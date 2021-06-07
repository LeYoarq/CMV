class Matematica {
  //Métodos
  mayor(num1: number, num2: number, num3: number): number {
    if ((num1 > num2) && (num1 > num3)) {
      return num1;
    } else {
      return (num2 >= num3) ? num2 : num3;
    }

  }

  sumar(...valores: number[]): number {
    let total: number = 0;
    for (let i: number = 0; i < valores.length; i++) {
      total += valores[i];
    }
    return total;
  }


  static multiplicar(...valores: number[]): number {
    var producto: number = 1;
    for (let i: number = 0; i < valores.length; i++) {
      producto *= valores[i];
    }
    return producto;
  }

  static aleatorio(inicio: number, fin: number): number {
    return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
  }

}


function calcular(modo: number) {
  let resultDiv = (<HTMLInputElement>document.getElementById("results"));
  let resultado: string = "";
  let num1 = parseInt((<HTMLInputElement>document.getElementById("num1")).value);
  let num2 = parseInt((<HTMLInputElement>document.getElementById("num2")).value);
  let num3 = parseInt((<HTMLInputElement>document.getElementById("num3")).value);
  const matematica = new Matematica();

  switch (modo) {
    case 1:
      resultado += "De los números intrudicidos, el " + matematica.mayor(num1, num2, num3) + " es el mayor";
      break;

    case 2:
      resultado += "La suma tiene como resultado: " + matematica.sumar(num1, num2, num3);
      break;

    case 3:
      let numRandom = Matematica.aleatorio(10, 20);
      resultado += "Se multiplico " + numRandom + " veces, de forma aleatoria: <br><br>";
      for (var i = 0; i <= numRandom; i++) {
        let numRandom = Matematica.aleatorio(2, 9);
        let res = Matematica.multiplicar(num1, num2, num3, numRandom)
        resultado += num1 + " x " + num2 + " x " + num3 + " x " + numRandom + " = " + res + "<br>";
      }
      break;
  }
  resultDiv.innerHTML = resultado;

}


