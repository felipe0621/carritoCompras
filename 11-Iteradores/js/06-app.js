//Foreach y map
/*el foreach ideal para recorrer arreglos  va a ejecutarse al menos una vez por cada vez que haya elementos en el arreglo
 es decir si en el arreglo hay 20 elementos se va a ejecutar 20 veces */


 //const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

 /*  con un for loop
 for(let i = 0; i < pendientes.length; i++){
    console.log(pendientes[i]);
 }*/

// pendientes.forEach( (pendiente) => console.log(pendiente)); //como es una sola linea no son necesarias las llaves
// pendientes.forEach( pendiente => console.log(pendiente)); //como es una sola se le pasa un parametro no son necesarios los parentesis de pendiente

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});


//ejemplo con carrito
const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//foreach con un solo parametro
//carrito.forEach(producto => console.log(producto)); //for each no crea un arreglo nuevo


//for each con dos parametros
// carrito.forEach((producto, indice) => {
//     console.log(`${indice} : ${producto.nombre}`);
// });



///ahora con map

//carrito.map(producto => console.log(producto)); //map crea un arreglo nuevo 



const nuevoArreglo = carrito.forEach(producto => producto.nombre);//no crea el arreglo
const nuevoArreglo2 = carrito.map(producto => producto.nombre);//crea el nuevo arreglo

console.log(nuevoArreglo);
console.log(nuevoArreglo2);