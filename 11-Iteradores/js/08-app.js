//For in video 87

//for in intera sobre objetos

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']; //arreglo tradicional


for(let pendiente of pendientes){
    console.log(pendiente);

}


//ejemplo con carrito  es decir arreglo de objetos
const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

for(let producto of carrito){
    //console.log(producto);
    console.log(producto.precio);
}


const automovil = {
    modelo: 'Mazda',
    Year: 1965,
    motor: '5.6'
}

for(let propiedad in automovil){
    //console.log(propiedad); //para mostrar las llaves 
    console.log(`${automovil[propiedad]}`); //para mostra los valores de las llaves
}


//otro version de for

for(let [llave, valor] of Object.entries(automovil)){
    //console.log(llave); //para ver las llaves
    console.log(valor); //para ver el valor
}
