//Eventos sobre los inputs, es decir sobre el teclado 
const busqueda = document.querySelector('.busqueda');

//agregando el evento
// busqueda.addEventListener('keydown', () => {  //keydown se ejecuta al presionar una tecla
//     console.log('Escribiendo...');

// });

// busqueda.addEventListener('keyup', () => {  //keydown se ejecuta al presionar una tecla y soltarla
//     console.log('He soltado la tecla');

// });

// busqueda.addEventListener('blur', () => {  //keydown se ejecuta al presionar una tecla y soltarla
//     console.log('Entrando y saliendo del formulario');
// });

// busqueda.addEventListener('copy', () => {  //keydown se ejecuta al copiar
//     console.log('copiando algo con control + c');
// });

// busqueda.addEventListener('paste', () => {  //keydown se ejecuta al pegar
//     console.log('pegando....');
// });

// busqueda.addEventListener('cut', () => {  //keydown se ejecuta al pegar
//     console.log('Cortando....');
// });


//con input se ejecutan todos los enventos anteriore excepto el blur 
// busqueda.addEventListener('input', () => {  //keydown se ejecuta al pegar
//     console.log('Utilizando el input como todo en uno');
// });

//colocandole un evento a la funcion
// busqueda.addEventListener('input', (e) => {  //e para indicar que es un evento
//     //console.log(e);
//     console.log(e.target.value); //para mostrar lo que se esta escribiendo
// });

//validando con if
busqueda.addEventListener('input', (e) => {  //e para indicar que es un evento
   if(e.target.value === ''){
    console.log('Falló la validación');
   } else {
    console.log('Validación exitossa');
   }

    //console.log(e.target.value); //para mostrar lo que se esta escribiendo
});