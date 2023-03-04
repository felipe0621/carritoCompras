//TraversinG de DOM
/*En JS todo esta conectado el document y la forma de moverse por todos los elementos  se le conoce  como
traversing de Dom es decir irlos recorriendo 
*/

const navegacion = document.querySelector('.navegacion'); //tambien se puede por  nav,  o  nav.navegacion
//console.log(navegacion); 
//console.log(navegacion.firstElementChild); //ME LISsta el primer elemento de la navegacion
console.log(navegacion.lastElementChild); //me lista el ultimo elemento de la navegacion


// //para acceder a los nodos es decir cada enlace de la navegacion
// console.log(navegacion.childNodes);//los espacios en blanco son considerados elementos


//console.log(navegacion.children);//lista los elementos reales es decir la etiqueta a   sin los espacios 
// console.log(navegacion.children[1]);//lista el elemento en la posicion 1
// console.log(navegacion.children[1].nodeName);//me retorna A que significa que es una etiqueta A 
// console.log(navegacion.children[1].nodeType);//me retorna 1 que signifca un nodo de tipo elemento es decir una etiqueta html 


const card = document.querySelector('.card');// seleccionando el primer card

//recorriendo de arriba hacia abajo es decir del padre al hijo con  children

//console.log(card);//me muestra el primer card
//console.log(card.children);//me muestra los elementos hijos de ese card
// console.log(card.children[1]);//para acceder a info de ese card
// console.log(card.children[1].children);//me lista los hijos de ese info
// console.log(card.children[1].children[1]);//me lista la posicion de ese children o sea la etiqueta p
// console.log(card.children[1].children[1].textContent);//me trae el contenido de esa etiqueta p

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing de Dom'; //modificando el contenido de p
// console.log(card.children[1].children[1].textContent);//me trae el contenido de esa etiqueta p

// console.log(card.children[0]);//aca me lista la imagen de ese card
// console.log(card.children[0].src);//aca me lista la url de la imagen
// card.children[0].src = 'img/hacer2.jpg'; //aca cambiandole la imagen al card




//traversing de hijo al padre  con .parentElement
//console.log(card.parentNode);//ACA me muestar el padre es decir el div pero con espacios
// 

//recorriendo entre hermanos es decir etiquetas que estan dentro de un mismo padre 
// console.log(card); // el primer card
// console.log(card.nextElementSibling); //me selecciona el segundo card, hermano del primero 
// console.log(card.nextElementSibling.nextElementSibling); //me selecciona el tercer card
// console.log(card.nextElementSibling[3]); //me selecciona el tercer card


//ultimo card
const ultimoCard = document.querySelector('.card:nth-child(4)');//para listar el card n. 4
//console.log(ultimoCard); 
console.log(ultimoCard.previousElementSibling); //me muestra el card anterior

