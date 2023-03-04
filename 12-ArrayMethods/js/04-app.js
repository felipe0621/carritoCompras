//.filter  este va a crear un nuevo arreglo basado en el parametro que es evaluado


const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
//resultado = carrito.filter(producto => producto.precio > 400);//muestras un arreglo con los productos con precio mayor a 400
//resultado = carrito.filter(producto => producto.precio < 600);//muestras un arreglo con los productos con precio nenor a 600
//resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');//muestra un arreglo con todos los productos exepto audifonos
resultado = carrito.filter(producto => producto.nombre === 'Audifonos');//muestra un arreglo solo con el producto audifonos



console.log(resultado);