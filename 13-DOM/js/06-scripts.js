//Modificar textos o imagenes con JS   video 102

//const encabezado = document.querySelector('.contenido-hero h1'); //seleccionando el h1 que esta dentro de contenido-hero
const encabezado = document.querySelector('.contenido-hero h1').textContent; //aca se trae de un a vez el contenido de ese h1
console.log(encabezado);

//accediendo al texto de ese h1
// console.log(encabezado.innerText);//me muestar el texto de ese h1, si en el css visibility:hidden; no lo va a encontrar
// console.log(encabezado.textContent);//me muestar el texto de ese h1
// console.log(encabezado.innerHTML);//me muestar el texto de ese h1 pero aca se trae todo el codigo html que se tenga en esa etiqueta


///lo que podriamos hacer 

//document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'; //con esto modifico el h1   

//ó
// const nuevoHeading = 'Nuevo heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


///Seleccionando una imagen
//const imagen = document.querySelector('.card img'); //seleccionando la primer imagne que encuentre de la clase card
//console.log(imagen);

//cambiandole el src a la imagen para cambiarla

const imagen = document.querySelector('.card img'); 
imagen.src = 'img/hacer2.jpg';

console.log(imagen);
