//para reemplazar texto en las cadenas
//metodos replace, slice y substring
const producto = "Monitorde20 pulgadas";

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//.slice para cortar
console.log(producto.slice(0, 10));
//console.log(producto.slice(10)); //aca empezaria en la posicion 10 en adelante
//console.log(producto.slice(10, 5)); //aca no hace nada pues el primer valor debe ser menor al segundo

//Alternativa a slice 
console.log(producto.substring(0, 10));
console.log(producto.substring(10, 5)); //substrin modifica el orden 

const usuario = "Felipe";
console.log(usuario.substring(0,1)); //o
console.log(usuario.charAt(0)); 
