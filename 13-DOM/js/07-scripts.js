//Cambiando el CSS CON JS

//const encabezado = document.querySelector('h1'); //seleccionando por etiqueta
//console.log(encabezado.style);

//para cambiarle el color al encabezado y otros atributos

// encabezado.style.backgroundColor = 'blue';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.fontWeight = 900;
// encabezado.style.textTransform = 'uppercase';


//para seleccionar un card
const card = document.querySelector('.card');
//card.classList.add('nueva-clase');//agregando una nueva clase
card.classList.add('nueva-clase', 'segunda-clase');//agregando una dos nueva clase

//tambien puedo eliminar una lista 
card.classList.remove('nueva-clase');

console.log(card.classList); //retorna como un arreglo

