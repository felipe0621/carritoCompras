//Object, keys, values y entries  video 47

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true    
}

console.log(Object.keys(producto)); //me retorna las llaves (propiedades) sin valores y con su correspond. posicion
console.log(Object.values(producto));//me retorna el valor de cada una de las propiedades
//es decir monitor de 20 pulgadas. 300 , true

console.log(Object.entries(producto));//retona todo en pares es decir su llave y su valor en un arreglo