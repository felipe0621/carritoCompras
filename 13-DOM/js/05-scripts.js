//.querySelectorAll    //este retorna todoslos elementeos que cumplan la condicion del selector

const card = document.querySelectorAll('.card'); //me retorna todas los cards que existen
console.log(card);


const formulario = document.querySelectorAll('#formulario');//me retorna todos los formularios que existen
console.log(formulario);


//si un elemento no existe
const noExiste = document.querySelectorAll('no-existe'); //me retorna un arreglo vacio
console.log(noExiste);
