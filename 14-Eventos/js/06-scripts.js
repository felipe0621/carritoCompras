// Event Bubbling es cuando un evento se propaga por muchos sitios, dando resultados qeu no esperamos

const cardDiv = document.querySelector('.card'); // esto me selecciona el primer card
const infoDiv = document.querySelector('.info'); // esto me selecciona el primer card
const titulo = document.querySelector('.titulo'); // esto me selecciona el primer card

//console.log(cardDiv);
// cardDiv.addEventListener('click', () =>{
//     console.log('Click en card...');

// });
// infoDiv.addEventListener('click', () =>{
//     console.log('Click en info...');

// });
// titulo.addEventListener('click', () =>{
//     console.log('Click en titulo...');

// });

//para evitar la propagacion del evento :

cardDiv.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Click en card...');

});
infoDiv.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Click en info...');

});
titulo.addEventListener('click', (e) =>{
    e.stopPropagation();
    console.log('Click en titulo...');

});