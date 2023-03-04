//Copiar dos objetos video 44


const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso: '1k',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); //para unir los dos y asignarlos a resultado
console.log(resultado);

//Spread operator  o   Rest Operator
const resultado2 = {...producto, ...medidas}; //los tres puntos indican copiar 
console.log(resultado2);  //me imprime lo mismo que la lineaa 19

