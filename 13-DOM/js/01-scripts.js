//DOM.   DOCUMENT OBJECT MODEL      
//Acceder a elementos del html con document

let elemento;

elemento = document;
elemento = document.all; //seleccionando todo el documento
elemento = document.head; //seleccionando el head
elemento = document.body; //sleccionando el body 
elemento = document.domain; //para mostrar en que url esta cargado el proyecto

elemento = document.forms; //para mostrar los formularios cuantos hay en el proyecto
elemento = document.forms[0]; //para mostrar los formularios y la posicion
elemento = document.forms[0].id; //para mostrar los formularios y su id
elemento = document.forms[0].method; //para mostrar los formularios y su metodo
elemento = document.forms[0].classList; //para mostrar los formularios y su metodo
elemento = document.forms[0].action; //para mostrar los formularios y su metodo

elemento = document.links; //para mostrar los links
elemento = document.links[4]; //para mostrar el link en la posicion 4
elemento = document.links[4].classList; //para mostrar la clase de esa posicion 4 COMO arreglo
elemento = document.links[4].className; //para mostrar EN NOMBRE DE La clase de esa posicion 4

elemento = document.images; //para mirar cuantas imagenes tiene el sitio

elemento = document.scripts; //para seleccionar todos los scripts


console.log(elemento);