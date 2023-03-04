//Métodos para eliminar espacios en blaco al comienzo y final de un string
const producto = "            Monitor de 20 pulgadas               ";


console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());
//eliminar los espacios al final
console.log(producto.trimEnd());

//combinando los dos para eliminar espacios al comienzo y final
console.log(producto.trimStart().trimEnd());

//tambien este metodo elimina espacios al comienzo y final
console.log(producto.trim());