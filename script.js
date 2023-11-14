// alert("Hola este es mi Javascript");

// let elAcercaDe = document.querySelector(
//   "main .seccion-1 .acerca-de h2"
// );

// if (elAcercaDe.innerText == "Acerca de mí") {
//   elAcercaDe.innerText = "Otro";
// } else {
//     console.log("no se cumple");
// }

//FUNCIONES
function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Bogotá. Me gusta la
    ${gusto}. Me gusta la programación y espero poder ayudar a las
    personas a mostrar lo que hacen.`

    console.log(contenido);
    return contenido;
}

function cambiarContenidoAcercaDe(contenido)
{
    let elAcercaDe = document.querySelector("main .seccion-1 .acerca-de h2");
    elAcercaDe.innerText = contenido;      
}

let nombre = "Andres";
let ciudad = "Bogota";
let gusto = "Video juegos";

let parrafo = document.querySelector("main .seccion-1 .acerca-de .parrafo2");
//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

//cambiarContenidoAcercaDe("***ACERCA DE MI***");

let menu_responsive = document.querySelector(".menu-checkbtn");
menu_responsive.onclick = function () {
  menu = document.querySelector("header nav");
  menu.classList.toggle("active");
};



