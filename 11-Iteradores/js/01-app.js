//Iteradores   for loop  video 80
/* En el caso de los iteradores el codigo se va a ejecutar hasta que una condicion se cumpla o se 
deje de cumplir
*/

//for loop     aca el codigo corre desde el cero ahasta el 9 incremento de 1 en 1
/*for(let i = 0; i < 10; i++){
    console.log(`Número: ${i}`);
}*/

//for loop     aca el codigo corre desde el cero ahasta el 9 incremento de 3 en 3
/*for(let i = 0; i < 10; i+= 3){
    console.log(`Número: ${i}`);
}*/

//for para saber si un número es par o impar 
/*for (let i = 1; i <= 20; i++){
    if( i % 2 === 0){
        console.log(`el numero ${i} es par`);
    }else {
        console.log(`El número ${i} es impar`);
    } 
}*/

const carrito = [
    {nombre: 'Monitor de  27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

//console.log(carrito[5]); //me retorna a celular
console.log(carrito.length); //para saber cuantos elementos tiene el arreglo

for(let i = 0; i <= carrito.length; i++){
    //console.table(carrito[i]);  //aca me muestra todo tanto llave como valor
    console.log(carrito[i].nombre); //aca me muestra solo la llave
}