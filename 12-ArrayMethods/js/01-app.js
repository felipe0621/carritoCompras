//.some  video 88

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //arreglo con indices

//para saber si un valor existe en un arreglo utilizo .includes

//comprobar si un valor existe en un arreglo
// meses.forEach((mes)=> {
//     console.log(mes);
// })

//o lo que es lo mismo:
//meses.forEach( mes => console.log(mes));

meses.forEach(mes=>{
    if(mes === 'Enero'){
        console.log(`El mes ${mes} si existe`);
    }
})

//utilizando un array metods

const resultado = meses.includes('Enero'); 
const resultado2 = meses.includes('Diciembre'); 

//console.log(resultado); //retorna true 
//console.log(resultado2); //retorna false


/*utilizando .some en arreglo tradicional o de indices*/
// const existe2 = meses.some((mes)=>{
//     return mes === 'Febrero';
// })
// console.log(existe2);

const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);









//****************************************************** */
//arreglo de objetos
const carrito = [  //arreglo de objetos
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//en unn arreglo de objetos se utiliza .some

// const existe = carrito.some( (producto) => {  
//     console.log(producto);
// })

// o lo mismo
//const existe = carrito.some(producto => console.log(producto)); //aca me muestra cada objeto con su llave y valor

// const existe = carrito.some( producto => {  
//         //return producto.nombre === 'Celular';
//         return producto.nombre === 'Reloj';
// })
//console.log(existe);

//o lo que es lo mismo
const existe = carrito.some( producto => producto.nombre === 'Celular');
//console.log(existe);

