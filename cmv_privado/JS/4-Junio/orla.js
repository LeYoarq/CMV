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
        let musImage = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        let musPie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        let musDetail = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;

        elemento = [musNom, musImage, musPie, musDetail];
        music.push(elemento);
    }
    showMusic();
}

function showMusic() {
    let bloque = "<section id=\"miOrla\" class='flex'>";
    for (i = 0; i < music.length; i++) {
        let elemTit = music[i][0];
        let elemImg = music[i][1];
        bloque += 
        `<figure class="container">
                
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <div class="card border-light flex" style="max-width: 18rem;">
                            <img class="img" src="${elemImg}" />
                            
                            <div class="card-footer bg-transparent border-success">${elemTit}</div>  
                    </div> 
                </div>
                <div class="flip-box-back">
                    <h2>Back Side</h2>
                </div>
            </div> 
        </div>
    </figure>        
        
      `


           /* `<figure class="container">
                <img class="img" src="${elemImg}">
                <div class="text">
                    <h3>${elemTit}</h3>
                </div>
        </figure> `;*/
    }
    bloque += "</section>"
    document.getElementById("mesage").innerHTML = bloque;
}
    /*   `<figure class="container">
                
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <div class="card-body text-success">
                                <div class="card border-light mb-3" style="max-width: 18rem;">
                                     <img class="img" src="${elemImg}" />
                                     <div class="card-footer bg-transparent border-success">${elemTit}</div>  
                                  </div> 
                                
                            </div>  

                        </div>
                        <div class="flip-box-back">
                            <h2>Back Side</h2>
                        </div>
                    </div>
                </div>
            </figure>        
                
              `

            
          `<div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <div>
                            <img class="img" src="${elemImg}" />   
                                <div class="text">
                                    <h3>${elemTit}</h3>
                                </div>
                        </div>
                    </div>
                    <div class="flip-box-back">
                        <h2>Back Side</h2>
                    </div>
                </div>
            </div>`*/
