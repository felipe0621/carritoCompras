//.findIndex para encontrar la posisicoin en un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //arreglo con indices

//averiguando el indice de algun elemento del arreglo
meses.forEach((mes, i)=>{
    //console.log(i);
    //console.log(mes);
    if(mes === 'Abril'){
        console.log(`El mes ${mes} fue encontrado en el indice ${i}`);
    }
})

//encontrando un indece con el metodo .findIndex
const indice = meses.findIndex(mes => mes === 'Abril');//retorna 3
//const indice = meses.findIndex(mes => mes === 'Diciembre');//retorna -1 es decir no lo pudo encontrar

console.log(indice);



const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//encontrar un indice en un arreglo de objtos
const index = carrito.findIndex( producto => producto.nombre === 'Tablet');
console.log(index);


//comprobando si existen los productos
if(index > 0){
    console.log('Los productos si existen');
} else{
    console.log('No existen los productos');
}