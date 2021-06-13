let registrados = [];
var music = []; 

function readXML() {
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
    var elemento = [];
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("elemento");
    for (i = 0; i < x.length; i++) {
        let musNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let musPie = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        
        elemento = [musNom, musPie];
        music.push(elemento);
    }
}

function showMusic() {
    let bloque = "<section id=\"miOrla\" class='flex'>" ;
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
        document.getElementById("mesage").innerHTML = bloque;
    }
