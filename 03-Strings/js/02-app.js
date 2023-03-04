// Métodos para strings o cadenas de texto
const producto = "Monitor de 20 pulgadas";

console.log(producto);
// para ver la cantidad  o longitud incluye espacios
console.log(producto.length); 



//para saber en que posicion esta determinada palabra
console.log(producto.indexOf('Monitor'));  //aca imprime 0 pues monitor esta en esa posicion
console.log(producto.indexOf('Tablet')); //aca imprime -1 pues no esta dicha palabra



//para saber si existe determinada palabra  true or false
console.log(producto.includes('Tablet')); //imprime false 
console.log(producto.includes('Monitor')); //imprime true
console.log(producto.includes('Mon')); //imprime true



