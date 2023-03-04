//.recude  video 90

const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach para el precio total de todos los productos
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);


///con un reduce 
let resultado = carrito.reduce((total, producto)=> total + producto.precio, 0); //0 el valor donde inicia
console.log(resultado);