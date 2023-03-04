// Prevenir event bubling con delegation video 114
const cardDiv = document.querySelector('.card'); // esto me selecciona el primer card

cardDiv.addEventListener('click', (e) => {
    //console.log('click en card');
    //console.log(e.target);//para identiicar a que se le da click
    //console.log(e.target.classList);//para identiicar las clases a las  que se le da click

    if(e.target.classList.contains('titulo')){
        console.log('Diste click en título');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }
    if(e.target.classList.contains('card')){
        console.log('Diste click en card');
    }
});