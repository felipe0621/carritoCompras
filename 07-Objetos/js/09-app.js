// con seal se puede modificar una propiedad del objeto unicamente, pero no se puede
// ni añadir ni eliminar propiedades
"use strict";
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

Object.seal( producto ); //para sellar un objeto

producto.disponible =false; // permite reasignar o modificar algo en el objeto
//producto.imagen = "imagen.jpg"; // no permite añadir nada 

//delete producto.precio;  //tampoco permite borrar algo del objeto creado

console.log(producto);

console.log(Object.isSealed(producto)); //para saber si un objeto esta sellado
