//Creo tipo (type) "Pelicula"
type Pelicula = {
    titulo: string, 
    genero: number,
    anyo: number,
    estrenada: boolean
}
//se agregan los valores de la pelicula
function Pelicula(titulo: string, genero: number, anyo: number, estrenada : boolean) {
    this.titulo = titulo;
    this.genero = genero;
    this.anyo = anyo;
    this.estrenada = estrenada;
}

//Aqui creo nuevos datos tipo de "pelicula" y los pongo en un array con la función creada antes 
const peliculas: Array<pelicula> = [
    new Pelicula('Mami te quiere', 1, 2020, false),
    new Pelicula('Teret', 3, 2021, true),
    new Pelicula('La la lam', 1, 2019, true),
]

function verTit(peliculas: Array<pelicula>, filtro:string): Array<pelicula> {
    return peliculas.filter(p => p.titulo == filtro)
}
function verTitD() {
    var tit = (<HTMLInputElement>document.getElementById("tit")).value;
    var pelis:pelicula[] = verTit(peliculas,tit)
    if(pelis.length != 0){
        for(var i=0;)
    }
}


/*
var dts: Pelicula = {
   titulo: 2, 
   genero: 3, 
   anyo: (),
   estrenada: 4, 
}*/