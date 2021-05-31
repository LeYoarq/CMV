//Ejercicios Arrays

// Pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//    (input - .slice .indexOf)

// variable global de la pagina
// un array con un elemento por cada usuario del XML
// en realidad será un array de arrays, una matriz bidimensional


function ascNombre() {
    //Ordeno primero la mariz
    registrados.sort(
    (usuario1,usuario2) =>
       usuario1[0].localeCompare(usuario2[0]),
  );
  
    // muestro en consola el array de usuarios registrados
    //Y aquí tambien deberia mostrar
    // muestro en consola el array de usuarios registrados
    let tabla="";
    registrados.forEach((usuario) => {
      usuario.forEach((datos) => {
        tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
        for (i = 0; i <registrados.length; i++) { 
          // leo las etiquetas que me interesan del objeto
          usrNom = registrados[i][0];
          usrPsw = registrados[i][1];
            // actualizo la tabla de visualización
          tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
          // actualizo el array bidimensional con los usuarios registrados
        }
        tabla += "</table>"
      });
    });
    document.getElementById("solicitado").innerHTML = tabla;
  }

function registrdo(usuario1,usuario2) {
    usuario1[0].localeCompare(usuario2[0]);
}




  