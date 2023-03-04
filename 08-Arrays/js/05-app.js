//Añadir nuevos elementos al inicio o fin de un array video 52
//metodo push para agregar al final
//Forma imperativa (modifica el objeto actual)

const meses = ['January', 'February', 'March'];

//meses[3] = 'Abril';
meses.push('April'); //agrega april al final
meses.push('May'); //agrega may al final

console.table(meses);

//ejemplo carrito de compras

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

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

//carrito.unshift(producto3); //para que coloque este elemento en primer lugar

//console.log(carrito);
console.table(carrito);

