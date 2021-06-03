let registrados = [];
var musica = []; //Array con mis elementos

function readXML() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };
    xhr.open("GET", "https://leyoarq.github.io/CMV/cmv_privado/JS/3-Junio/datos.xml", true);
    xhr.send();
}

function cargarArray(xml) {
    var i;
    var musNom;
    var musPie;
    var nombre = [];
    var xmlDoc = xml.responseXML;


    var x = xmlDoc.getElementsByTagName("elemento");
    // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]

    // tabla es una variable string que contiene codigo
    // html para poder mostrar en pantalla el XML con formato tabla

    let tabla = "<table><tr><th>Bandas</th><th>Fotos Iconicas</th></tr>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let musNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let musPie = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue; //Puse foto 
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + musNom + "</td><td>" + "<div> <img src='" + foto + "' /></td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        nombre= [musNom, musPie];
        musica.push(nombre);
        
    }
    tabla += "</table>"
    document.getElementById("mensaje").innerHTML = tabla;

    // muestro en consola el array de orla
  
    musica.forEach((nombre) => {
        elemento.forEach((elemento) => {
        console.log(datos);
         });
    });

}

function MostrarClave() {
    // obtenemos el usuario del campo input y
    // validamos que exista en el array
    // si no, mostramos un alert y no hacemos nada
    // si existe actualizamos el elemento con id clavebuscada

    // sintaxis jQuery: nombre = $("#nom").val();

}


function ascNombre() {
    // Ordeno la matriz global
    // acendente por nombre
    registrados.sort(
        (usuario1, usuario2) =>
            usuario1[0].localeCompare(usuario2[0]),
    );
    mostrar();
}



function desClave() {
    // Ordeno la matriz global
    // descendente por clave
    registrados.sort(
        (usuario2, usuario1) =>
            usuario1[1].localeCompare(usuario2[1]),
    );
    mostrar();
}

function showMusic() {
    // en formato tabla en el id solicitado
    let bloque = "<section id=\"miOrla\">";// bloque de imagenes
    registrados.forEach((elemento) => {
        elemento.forEach((datos) => {
            tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
            for (i = 0; i < registrados.length; i++) {
                // leo las etiquetas que me interesan del objeto
                elemTit = registrados[i][0];
                elemImg= registrados[i][1];
                // actualizo la tabla de visualización
                boque += "<div class=\"divOrla\"><img class=\"imgOrla\" src=\" + elemImg + \"/></div>";
                // actualizo el array bidimensional con los usuarios registrados
            }
            tabla += "</section>"
            showMusic();//no sé
        });
    });
    // la mostramos en el html
    document.getElementById("solicitado").innerHTML = tabla;
}
