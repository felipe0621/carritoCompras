//Eventos en un formulario  video 111
const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', (e) => {  //evento submit  con funcion anonima
//     e.preventDefault(); //para prevenir la accion que realizaria ese elemento por default es decir 
//     //evitar que el navegador haga lo que tenga que hacer normalmente

//     console.log('Buscando.....');

//     //console.log(e);
//     //console.log(e.target.method);
//     console.log(e.target.action);

// });


//declarando una funcion
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); //para prevenir la accion que realizaria ese elemento por default es decir 
    //evitar que el navegador haga lo que tenga que hacer normalmente

    console.log('Buscando.....');

    //console.log(e);
    //console.log(e.target.method);
    console.log(e.target.action);
}

