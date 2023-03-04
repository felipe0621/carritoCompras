//.every   aca todos los elementos de un arreglo debe cumplir la condicion para que devuelva un true

const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 600 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado) //aparece un true pues todos los precios son menores a 1000

//para revisar que almenos alguno cumpla con la condicion utilizamos .some
const resultado2 = carrito.some(producto => producto.precio < 300);
console.log(resultado2) //aparece un true pues almenos uno cumple con la condicion se ser menor de 300