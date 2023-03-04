//.find crea un arreglo basado en la condicion que esta revisando

const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach
//carrito.forEach(producto => console.log(producto)); //muestra todo el arreglo


let resultado = '';

carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index];
    }
});
console.log(resultado);



//con un .find
//.find solo retorna el primer elemento que cumpla la condicion
//const resultado2 = carrito.find(producto => producto.nombre === 'Tablet');
const resultado2 = carrito.find(producto => producto.precio === 100);
console.log(resultado2);

//si asignamos uno que no cumpla la condicion retorna undefined
const resultado3 = carrito.find(producto => producto.precio === 1000);
console.log(resultado3);  //retorna undefined