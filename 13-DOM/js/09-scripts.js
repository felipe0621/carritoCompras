//Eliminar elementos del Dom

//existen dos formas de hacerlo 
//eliminarlo por si mismo y otra eliminarlo desde el padre

const primerEnlace = document.querySelector('a');
console.log(primerEnlace);


primerEnlace.remove();//ahora eliminando el elemento

//ahora eliminandolo desde el padre
const navegacion = document.querySelector('.navegacion');
//console.log(navegacion);
console.log(navegacion.children);//me muestra los elementos hijos que tiene 
//navegacion.children[0].remove();//removiendo o eliminando el primer elemento de la navegacion
navegacion.removeChild(navegacion.children[0]);//removiendo o eliminando el primer elemento de la navegacion