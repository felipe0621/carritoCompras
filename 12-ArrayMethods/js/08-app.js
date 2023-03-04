//continuando con spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //arreglo con indices

//agregando un nuevo elemento
//spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto'];
//const meses2 = ['Agosto', ...meses ]; //aca coloca agosto al comienzo del arreglo
console.log(meses2)



const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 600 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//spread operator con arreglo de objetos
const producto = {nombre: 'Disco Duro', precio: 300};

const carrito2 = [...carrito, producto]; //producto no lleva los ... pues es un objeto
console.log(carrito2);