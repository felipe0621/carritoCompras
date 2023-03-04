//Eventos del mouse video 109

//const nav = document.querySelector('.navegacion');//aca por clase
const nav = document.querySelector('nav'); //aca por etiqueta

console.log(nav)

//registrar un evento
// nav.addEventListener('click', () => {     //evento dando click en cuarquier parte de la navegación
//     console.log('click en nav');
// });


// nav.addEventListener('mousedown', ()=>{ //similar a click se ejecuta al dar click
//     console.log('entrando a la navegación con mouse down');

//     nav.style.backgroundColor = 'white';
// });

nav.addEventListener('mouseup', ()=>{ //se ejecuta cuando doy clik y lo suelto
    console.log('entrando a la navegación con mouseup');

    nav.style.backgroundColor = 'white';
});


nav.addEventListener('mouseenter', ()=>{
    console.log('entrando a la navegación');

    nav.style.backgroundColor = 'white';
});


// nav.addEventListener('mouseout', ()=>{
//     console.log('saliendo de la navegación');

//     nav.style.backgroundColor = 'black';
// });

nav.addEventListener('dblclick', ()=>{
    console.log('dando doble click');

    nav.style.backgroundColor = 'blue';
});

/*
click
mousedown: similar al click
mouseup: cuando se suelta el mouse
dblclick: doble click


*/
