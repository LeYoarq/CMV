'use strict'

/*Ejercicio 4: formulario que me diga cual es el más alto de 5 números introducidos al darle MAYOR. 
  Ejercicio 5. Mismo ejercicio pero que calcule el promedio*/

let n1 = parseInt(prompt("Introduce el 1er Número", 0));
let n2 = parseInt(prompt("Introduce el 2do Número", 0));
let n3 = parseInt(prompt("Introduce el 3ro Número", 0));
let n4 = parseInt(prompt("Introduce el 4to Número", 0));
let n5 = parseInt(prompt("Introduce el 5to Número", 0));
//let numMayor = number[0];
//let suma = 0; 
//let numMayor = [];
//let cuentaMisN = 0;//ejercicio 5
console.log("estos numeros fueron los introducidos " + n1, n2, n3, n4, n5)
// Primera solución -- A pico y pala
/*
if(n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    alert("El numero mayor es: "+ n1)
}else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5){
    alert("El numero mayor es: "+ n2)
}else if(n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5){
    alert("El numero mayor es: "+ n3)
}else if(n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5){
    alert("El numero mayor es: "+ n4)
}else if(n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4){
    alert("El numero mayor es: "+ n5)
}else {
    alert("No has introducido valores validos (Muchos 0 bro)")
}*/

//Ahora con un bucle for a ver si si se puede

for(i=1; i<5; i++){
   /*if number > numMayor(){
        number >= n2[1], n3[2], n4[3], n5[4];
        alert ("El mayor de todos es: " + numMayor)
    } */
    console.log(i);
}

