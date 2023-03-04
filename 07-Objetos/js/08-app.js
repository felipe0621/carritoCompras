//congelar un objeto para no poder modificarlo

"use strict";
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.freeze( producto ); //para congelar un objeto

//producto.disponible =false; // no permite reasignar nada
//producto.imagen = "imagen.jpg"; // no permite añadir nada 

//delete producto.precio;  //tampoco permite borrar algo del objeto creado

console.log(producto);

console.log(Object.isFrozen(producto)); //para saber si un objeto esta congelado
