//Generar html con JS

//Creando un nuevo enlace

const enlace = document.createElement('A'); //despues del createlemente le paso la etiqueta a utilizar puede ser en mayus
                                //culas o minusculas
//Agregando el texto                                
enlace.textContent = 'Nuevo Enlace';   

//Añadiendo href
enlace.href = '/nuevo-enlace';

//Añadiendo un target
enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

console.log(enlace);

function miFuncion(){
    alert('Diste click');

}

//Ahora para  mostrar el elemento creado es decir mostrar el enlace

//selecciono navegacion
const navegacion = document.querySelector('nav'); //seleccionando el elemento a listar
navegacion.appendChild(enlace); //para agregar el nuevo elemento al final de la navegacion

console.log(navegacion);
console.log(navegacion.children);

//navegacion.insertBefore(enlace,navegacion.children[0]);//para qeu vaya al inicio
navegacion.insertBefore(enlace,navegacion.children[1]);//para qeu vaya como segundo enlace


///Creando un card
const parrafo1 = document.createElement('p'); //crendo una etiqueta p
parrafo1.textContent = 'Concierto'; //agregando este texto a etiqueta p
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p'); //crendo una etiqueta p
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p'); //crendo una etiqueta p
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

console.log(parrafo1);
console.log(parrafo2);
console.log(parrafo3);




//Crear div con la clase info
const info = document.createElement('div'); //creando la etiqueta div
info.classList.add('info');

//agregando los elementos
info.appendChild( parrafo1);
info.appendChild( parrafo2);
info.appendChild( parrafo3);



console.log(info);


//crear la imagen
const imagen = document.createElement('img'); 
imagen.src = 'img/hacer2.jpg';
imagen.alt = ('Texto alternativo');

console.log(imagen);


//crear el card
const card = document.createElement('div');
card.classList.add('card');//agreagando la clase

//asignar imagen
card.appendChild(imagen); //para agregar la imagen

//asignar info
card.appendChild(info);


console.log(card);

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards'); //seleccionando el sitio deonde quiero
//contenedor.appendChild(card); //aca me lo agrega despues de la ultima imagen creada
contenedor.insertBefore(card, contenedor.children[0]);//para que lo muestre al inicio

