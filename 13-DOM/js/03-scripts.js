//.getElementById

//los id se deben usar solo un nombre por documento  y de hecho va a retornar solo un elemento el primero que encuentere


const formulario = document.getElementById('formulario');
console.log(formulario);

//si no existe
const noExite = document.getElementById('no-exite');
console.log(noExite);//retorna null

