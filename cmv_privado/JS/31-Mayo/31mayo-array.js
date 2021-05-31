//Ejercicios Arrays

// Pasos:
// Crear el Array.
// Generar 7 elementos de forma aleatoria entre 1 y 7
// Pedir por pantalla el metodo de ordenamiento:
// 1. Mayor a menor.
// 2. menor a mayor 
// mostrar el array ordenado.

var arr = [];
for (let i = 0; i < 7; i++) {
    arr.push(parseInt(Math.random() * 7 + 1));
}
function ordered() {
    orderedValues = arr.sort((a, b) => {
        return a - b;
    });
    document.getElementById("mayorMenor").innerHTML = orderedValues;
}

function reverse() {
    reverseValues = arr.reverse();
    document.getElementById("mayorMenor").innerHTML = reverseValues;
}