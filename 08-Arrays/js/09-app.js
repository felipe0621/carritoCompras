//foreach para iterar un array
const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    //console.log(carrito[i]);
    //console.table(carrito[i]);// aca me muestra las diferentes llaves y su valor
   // console.table(carrito[i].nombre);// aca me muestra solo los valores asignados 
    //console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`);    
}

//utilizando método foreach
carrito.forEach( function(producto){ /// puedo colocar el nombre que quiera en este caso puse producto puede ser solo la p 
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
    
})