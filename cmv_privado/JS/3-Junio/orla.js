let registrados = [];
var music = []; //Array con mis elementos

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
    var elemento = [];
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("elemento");
    // html para poder mostrar en pantalla el XML con formato tabla
    let tabla = "<table><tr><th>Bandas</th><th>Fotos Iconicas</th></tr>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let musNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let musPie = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue; //Puse foto 
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + musNom + "</td><td>" + "<div class=\"imgOrla\"><img class=\'imgOrla\'src=\"" + musPie + "\"/></div>" + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        elemento = [musNom, musPie];
        music.push(elemento);
    }
    tabla += "</table>"
    document.getElementById("mesage").innerHTML = tabla;
    // muestro en consola el array de orla
    music.forEach((elemento) => {
        elemento.forEach((datos) => {
            console.log(datos);
        });
    });
}




function showMusic() {
    let bloque = "<section id=\"miOrla\" class='flex'>" ;// bloque de imagenes
        for (i = 0; i < music.length; i++) {
            let elemTit = music[i][0];
            let elemImg = music[i][1];
            bloque +=
                `<figure class="container">
                    <img class="img" src="${elemImg}">
                    <div class="text">
                        <h3>${elemTit}</h3>
                    </div>
            </figure> `;
        }
        bloque += "</section>"
        document.getElementById("mesage1").innerHTML = bloque;
    }














/*

function showMusic() {
    // en formato tabla en el id solicitado
    let tabla = "<section id=\"miOrla\">";// bloque de imagenes
    orla.forEach((elemento) => {//cambie por musica
       /* elemento.forEach((orla) => {
            tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
            for (i = 0; i < registrados.length; i++) {*/
                // leo las etiquetas que me interesan del objeto*/
                //elemTit = orla[i][0];
                //elemImg= orla[i][1];
                // actualizo la tabla de visualización
                //tabla += "<div class=\"divOrla\"><img class=\"imgOrla\" src=\" + elemImg + \"/></div>";
                // actualizo el array bidimensional con los usuarios registrados
            //}

            //showMusic();//no sé
        //});
    //});
    //tabla += "</section>"
    // la mostramos en el html
    //document.getElementById("mensaje").innerHTML = tabla;
//}

