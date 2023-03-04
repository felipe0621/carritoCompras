//Break y continue en un for loop

//for(let i = 1; i < 20; i++ ){
    
    // if(i === 5){ //break
    //     console.log('Este es el numero 5');
    //     break;
    // }
    // console.log(`los números son ${i}`);

    /*continue*/
//     if( i === 5){    ///aca con un continue
//         console.log('Cinco');
//         continue;
//     }
//     console.log(`los números son ${i}`);
// }

//ejemplo de continue con carrito de compras

const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

for(let i = 0; i < carrito.length; i++){
    //console.log(carrito[i].nombre);
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;  //al coloccar continue ya no va a listar ese articulo en el carrito       
    }
    console.log(carrito[i].nombre);
}