type pelicula = {
    titulo: string, 
    genero: number, 
    anyo: number, 
    estrenada: boolean
  }
  
  function Pelicula(titulo: string, genero: number, anyo: number, estrenada: boolean) {
    this.titulo = titulo;
    this.genero = genero;
    this.anyo = anyo;
    this.estrenada = estrenada;
  }

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
        for(var i=0; i<pelis.length; i++){
          alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n")
        }
      } else {
        alert("NO hay ninguna película con ese Título")
      }
  }
  
  function verGen(peliculas: Array<pelicula>, filtro:number): Array<pelicula>{
    return peliculas.filter(p => p.genero == filtro)
  }
  function verGenD() {
    var gen = (<HTMLInputElement>document.getElementById("gen")).value; 
    var gen2:number = (parseInt(gen))
    var pelis:pelicula[] = verGen(peliculas,gen2)
    if(pelis.length != 0){
      for(var i=0; i<pelis.length; i++){
        alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n")
      }
    } else {
      alert("NO hay ninguna película de ese Género")
    }
  }
  
  function verEstr(peliculas: Array<pelicula>, filtro:boolean): Array<pelicula>{
    return peliculas.filter(p => p.estrenada == filtro)
  }
  function verEstrD() {
    var estr = (<HTMLInputElement>document.getElementById("estr")).value;
    if(estr=="true"){
      var estr2:boolean = true
      var pelis:pelicula[] = verEstr(peliculas,estr2)
    } else if(estr=="false"){
      var estr2:boolean = false
      var pelis:pelicula[] = verEstr(peliculas,estr2)
    } else {
      alert("ERROR, NO hay ninguna película con ese criterio")
    }
    if(pelis.length != 0){
      for(var i=0; i<pelis.length; i++){
        alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n")
      } 
    }
  }
  
  function verAn(peliculas: Array<pelicula>, filtro:number): Array<pelicula>{
    return peliculas.filter(p => p.anyo > filtro)
  }
  function verAnD() {
    var an = (<HTMLInputElement>document.getElementById("an")).value; 
    var an2:number = (parseInt(an))
    var pelis:pelicula[] = verAn(peliculas,an2)
    if(pelis.length != 0){
      for(var i=0; i<pelis.length; i++){
        alert(pelis[i].titulo + " " + pelis[i].genero + " " + pelis[i].anyo + " " + pelis[i].estrenada + "\n")
      }
    } else {
      alert("NO hay ninguna película de ese año mínimo")
    }
  }
