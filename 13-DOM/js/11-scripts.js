//Ejemplo avanzado de lo que se puede hace con Js  para los eventos

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


// btnFlotante.addEventListener('click', () => {
//     //console.log('Diste click en el botón');
// });
btnFlotante.addEventListener('click', mostrarOcultarFooter); //en la funcion mostocultafoo no es necesrio el()

//creando una función
function mostrarOcultarFooter(){
    //console.log('Diste click en el botón');
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        //btnFlotante.classList.remove('activo'); // ó
        this.classList.remove('activo'); // ó
        this.textContent = 'Idioma y Moneda';
    }else {
        footer.classList.add('activo'); //para que me aparezca el footer al dar click
        //btnFlotante.classList.add('activo'); // ó
        this.classList.add('activo');
        this.textContent = 'X Cerrar'
    }
    

    console.log(footer.classList);

}