var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    //Métodos
    Matematica.prototype.mayor = function (num1, num2, num3) {
        if ((num1 > num2) && (num1 > num3)) {
            return num1;
        }
        else {
            return (num2 >= num3) ? num2 : num3;
        }
    };
    Matematica.prototype.sumar = function () {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        var total = 0;
        for (var i = 0; i < valores.length; i++) {
            total += valores[i];
        }
        return total;
    };
    Matematica.multiplicar = function () {
        var valores = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            valores[_i] = arguments[_i];
        }
        var producto = 1;
        for (var i = 0; i < valores.length; i++) {
            producto *= valores[i];
        }
        return producto;
    };
    Matematica.aleatorio = function (inicio, fin) {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    };
    return Matematica;
}());
function calcular(modo) {
    var resultDiv = document.getElementById("results");
    var resultado = "";
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var matematica = new Matematica();
    switch (modo) {
        case 1:
            resultado += "De los números intrudicidos, el " + matematica.mayor(num1, num2, num3) + " es el número mayor";
            break;
        case 2:
            resultado += "La suma tiene como resultado: " + matematica.sumar(num1, num2, num3);
            break;
        case 3:
            var numRandom = Matematica.aleatorio(10, 20);
            resultado += "Se multiplico " + numRandom + " veces, de forma aleatoria: <br><br>";
            for (var i = 0; i <= numRandom; i++) {
                var numRandom = Matematica.aleatorio(2, 9);
                var res = Matematica.multiplicar(num1, num2, num3, numRandom);
                resultado += num1 + " x " + num2 + " x " + num3 + " x " + numRandom + " = " + res + "<br>";
            }
            break;
    }
    resultDiv.innerHTML = resultado;
}