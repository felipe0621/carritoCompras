
const producto = "Monitor de 20 pulgadas ";
const precio = '30 USD';

// console.log(producto.concat(precio));
// console.log(producto.concat('En descuento'));

console.log( producto + precio);
console.log( producto + "con un precio de: " + precio);
//console.log("El producto " + producto + "tiene un costo de: " + precio );
console.log("El producto ",  producto, "tiene un costo de: ", precio );


//template strings o template literals
console.log(`El producto ${producto} tiene un precio de: $ ${precio}`);  //comillas inclinadas con alt + 96 