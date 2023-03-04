//Como acceder a los valores de un objeto y asignarlos a una variable
//Video 38  destructuring objects
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    //imagen: "imagen.jpg",
}

// console.log(producto.nombre);


// const nombre = producto.nombre;
// console.log(nombre);

//con object destructuring
// const { nombre } = producto;
// console.log(nombre); //imprime el valor asignado a la variable nombre

// const { precio } = producto;
// console.log(precio);

// const {disponible} = producto;
// console.log(disponible);

const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(nombre + ",", precio +",", disponible);//imprime Monitor de 20 pulgadas, 300, true


