//Crear arrays en llava script
//mientras los objetos se crean con {}    los arreglos con [ ] 
//los objetos tienen llave y valor   los objetos solo valores


//objeto
// const producto = {
//     nombre : "Monitor de 20 pulgadas",
//     precio : 300,
//     disponible : true    
// }


//arreglo
const numeros = [10, 20, 30];
console.log(numeros);//me retorna el arreglo con su extension o cantidad de elementos

//otra forma de crear arreglo
const meses = new Array('Enero', 'February', 'Marzo', 'Abril');
console.log(meses); //me retorna el arreglo con su extension o cantidad de elementos

//creando un arreglo que contiene datos de todo tipo
const deTodo = ["Hola", 10, true, "Si", null, {nombre: 'Pipe', trabajo: 'Programador'}, [1,2,3]];
console.log(deTodo);