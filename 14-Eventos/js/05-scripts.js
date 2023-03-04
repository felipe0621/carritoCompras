//Eventos al dar scroll con el mouse dichos eventos van a suceder en la ventana global  window   video  112
//por ejem scroll y   scrol hacia abajo, scroll x  seria hacia los lados

// window.addEventListener('scroll', () =>{
//     //console.log('dando scroll...'); //me imprime el scroll que he dado
//     const scrollPX = window.scrollY; //me muestra el escrol hacia arriba o abajo
//     console.log(scrollPX);
// });

//para realizar alguna animacion respecto de la ubicación
window.addEventListener('scroll', () =>{
   
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();//para decir en que lugar se encuentra un elemento

    //console.log(ubicacion);

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no se necesita dar mas scroll');
    }
});



