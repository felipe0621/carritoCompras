//Eliminar elementos con Splice

const carrito = [];

//Definir un producto  creando un objeto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}
const producto3 = {
    nombre: "Teclado",
    precio: 50
}
const producto4 = {
    nombre: "Mouse",
    precio: 10
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

//carrito.unshift(producto3); //para que coloque este elemento en primer lugar

//console.log(carrito);
console.table(carrito);

// //Eliminar último elemento de un arreglo
// //delete producto.nombre; //asi se elimina en objetos
// carrito.pop();
// console.table(carrito);

// //Eliminar el inicio del arreglo
// carrito.shift();
// console.table(carrito);


//Método splice para eliminar cualquier elemento del arreglo
//carrito.splice(1, 1);  //el primer parametro indica la posicion y el segundo los elementos a eliminar
//carrito.splice(0, 1); //elimina el primer elemento
carrito.splice(3, 1); //elimina el ultimo elemento

console.table(carrito);