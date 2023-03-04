//Arrow functions en un foreach y un map

const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//.map crea un nuevo arreglo 
const nuevoArreglo = carrito.map(producto=> `${producto.nombre} - precio: ${producto.precio}`);  //no es necesario el return despues de =>

//foreach no crea el nuevo arreglo
 carrito.forEach(producto => console.log(`${producto.nombre} - precio: ${producto.precio}`)); //aca si es necesario el console.log despues de =>


console.table(nuevoArreglo);
