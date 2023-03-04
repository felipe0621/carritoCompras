//For of video 86    
//for in itera sobre arreglos

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