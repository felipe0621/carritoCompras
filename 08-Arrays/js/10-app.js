//.map para iterar un array y sus diferencias con foreach

const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//utilizando método foreach
// carrito.forEach( function(producto){ /// puedo colocar el nombre que quiera en este caso puse producto puede ser solo la p 
//     console.log(`${producto.nombre} - precio: ${producto.precio}`);
    
// })

//.map crea un arreglo nuevo
// carrito.map( function(producto){ /// puedo colocar el nombre que quiera en este caso puse producto puede ser solo la p 
//     console.log(`${producto.nombre} - precio: ${producto.precio}`);
        
// })


//.map crea un nuevo arreglo 
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
})

//foreach no crea el nuevo arreglo
const nuevoArreglo2 = carrito.forEach(function(producto){
    return `${producto.nombre} - precio: ${producto.precio}`;
})

console.table(nuevoArreglo);
console.table(nuevoArreglo2);