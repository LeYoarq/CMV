var dd = "HOLAAAA Mundo";
console.log(dd);

var dts = {
    n11: 3,
    n22: 5,
    n33: 7
};
var dtls = {
    n11: 18,
    n22: 3,
    n33: 1972,
    dt1: "/",
    dt2: "/",
    dt3: "Fecha nacimiento: "
};
var datOr = {
    dt1: "Fecha de nacimiento: ",
    dt2: "18-3-",
    dt3: "1972"
};
;
var nms = {
    n1: "Nacho",
    n2: "Martinez"
};
var Animal = {
    nombre: "Gato",
    raza: "Felino",
    peso: 30
};
var datos = [];
function enviar() {
    var nm1 = document.getElementById("num1").value;
    var n1 = (parseInt(nm1));
    datos.push(n1);
    var nm2 = document.getElementById("num2").value;
    var n2 = (parseInt(nm2));
    datos.push(n2);
    var nm3 = document.getElementById("num3").value;
    var n3 = (parseInt(nm3));
    datos.push(n3);
}
function verArrayDatos() {
    for (var i = 0; i < datos.length; i++) {
        alert(datos[i]);
    }
}
function multiDatos() {
    alert("MULTIPLICACIoN: " + ((dts.n22 - dts.n11) * dts.n22));
}
function restaDatos() {
    alert("RESTA: " + ((dts.n22 * 4) - (dts.n11 + dts.n33)));
}
function verNombre() {
    alert("Nombre entero: " + nms.n1 + " " + nms.n2);
}
function verNombreReves() {
    alert("Nombre por Apellido: " + nms.n2 + " " + nms.n1);
}
function verFechaNac() {
    alert(dtls.dt3 + " " + dtls.n11 + dtls.dt1 + dtls.n22 + dtls.dt2 + dtls.n33);
}
function verrAnimal() {
    alert("ANIMAL: " + Animal.nombre + " - Raza: " + Animal.raza + " - peso: " + Animal.peso + "Kg");
}
