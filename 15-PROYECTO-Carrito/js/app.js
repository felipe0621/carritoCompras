// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaCursos.addEventListener('click', agregarCurso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}




// Funciones
// Función que añade el curso al carrito
function agregarCurso(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          leerDatosCurso(curso);
     }
}

// Lee los datos del curso
function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    curso.cantidad++;
                     return curso;
                } else {
                     return curso;
             }
          });
          articulosCarrito = [...cursos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     // console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';


     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}














































// //creando las variables  video 117
// const carrito = document.querySelector('#carrito'); //seleccionamos el id carrito
// const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //selecciono el id lista-carrito y la etiq. tbody
// const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// const listaCursos = document.querySelector('#lista-cursos'); //selecciono el id lista-cursos

// let articulosCarrito = []; //arreglo que inicia vacio para luego irlo llenando conforme se de click en los cursos a adquire


// //función para registrar todos los events listeners
// cargarEventListeners();
// function cargarEventListeners(){
//     //cuando agregas un curso presionando "agregar al carrito"
//     listaCursos.addEventListener('click', agregarCurso); //evento click, funcion agregar curso

//     //Elimina cursos del carrito
//     carrito.addEventListener('click', eliminarCurso);

//     //Vaciar el carrito
//     vaciarCarritoBtn.addEventListener('click', () => {
//        //articulosCarrito = []; //reseteamos el arreglo

//         //limpiarHTML(); //eliminamos todo el html
//     })

// }

// function agregarCurso(e){
//     e.preventDefault()//para qeu no me redireccione al comienzo 
//     if(e.target.classList.contains('agregar-carrito')){
//         //console.log(e.target);
//         //console.log(e.target.parentElement.parentElement); //para devolvemre al div card
//         const curso = e.target.parentElement.parentElement;
//         //console.log(cursoSeleccionado); 
//         leerDatosCurso(curso);
//     }
    
// }
// //Elimina un curso del carrito
// function eliminarCurso(e){
//     e.preventDefault();
//     //console.log(e.target.classList);
//     if(e.target.classList.contains('borrar-curso')){
//         //console.log(e.target.getAttribute('data-id'));
//         const cursoId = e.target.getAttribute('data-id');

//         //Eliminina por el data-id del arreglo de articulosCarrito
//         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId) 
//         //console.log(articulosCarrito);

//         carritoHTML();
//     }
// }



// //video 118 leer los datos del curso que seleccionamos
// //lee el contenido del html al que le dimos click y extrae la informacion del curso
// function leerDatosCurso(curso){
//     //console.log(curso); 

//     //crear un objeto con el contenido del curso actual
//     const infoCurso = {
//         imagen: curso.querySelector('img').src,
//         titulo: curso.querySelector('h4').textContent,              //textcontent para extrare el texto
//         precio: curso.querySelector('.precio span').textContent,            //dela clase precio selecciono el span
//         id: curso.querySelector('a').getAttribute('data-id'),
//         cantidad: 1
//     }
// //Revisa si un elemento ya existe en el carrito
// //con .some para verificar en un arreglo de objetos si un elemento existe en el
// const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
// //console.log(existe);
// if(existe){
//     //Actualizamos la cantidad
//     const cursos =articulosCarrito.map((curso) =>{
//         if(curso.id === infoCurso.id){
//             curso.cantidad++;
//             return curso; //retorna el objeto actualizado
//         } else {
//             return curso; //retorna el objeto que no son duplicados
//         }
//     });
//     articulosCarrito = [...cursos]



// } else {
//     //Agregamos el curso al carrito
//     articulosCarrito = [...articulosCarrito, infoCurso];
// }
//     //AGrega elementos al arreglo del carrito
//     //articulosCarrito = [...articulosCarrito, infoCurso];

//     //console.log(articulosCarrito);

//     carritoHTML();
// }

// //Muestra el carrito de compras en el html
// function carritoHTML(){

//     //limpiar el html
//     limpiarHTML();
    


// //recorre el carrito y genera el html
//     articulosCarrito.forEach( (curso) =>{
//         //console.log(curso)
//         const { imagen, titulo, precio, cantidad, id} = curso;
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td><img src="${curso.imagen}" width = "100"></td>
//             <td>${titulo}</td>        
//             <td>${precio}</td>        
//             <td>${cantidad}</td>   
            
//             <td>
//                 <a href="#" class="borrar-curso" data-id"${id}"> X </a>            
//             </td>
//         `;
//         //agregar el html del carrito en el tbody
//         contenedorCarrito.appendChild(row);
//     });
// }

// //Elimina los cursos del tbody
// function limpiarHTML(){
//     //forma lenta
//     //contenedorCarrito.innerHTML = '';  //PARA QUE el html se limpie al momento de agregar un nuevo curso

//     while(contenedorCarrito.firstChild){
//         contenedorCarrito.removeChild(contenedorCarrito.firstChild);

//     }
// }


