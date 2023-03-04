//Destructuring de objetos anidados
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
       medidas: {
            peso: '1k',
            medida: '1m'
       },
       fabricacion: {
            pais: 'China'
       }
    }    
}

//aplicando destructuring
//const {nombre} = producto;


const {nombre, informacion, informacion: {fabricacion, fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
