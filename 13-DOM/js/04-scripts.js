//querySelector

//puede buscar cuaquier elemento clase, id, o alguna etiqueta de html pero solo va a retornar un elemento el primero que encuentre

const card = document.querySelector('.card');
console.log(card);

//se pueden tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//seleccionar el formulario
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

//seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);