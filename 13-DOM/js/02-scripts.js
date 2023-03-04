//.getElementsByClassName  video 987

const header = document.getElementsByClassName('header');//se debe de colocar la clase como esta definida en el html
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//si una clase no existe
const noExite = document.getElementsByClassName('no-existe');
console.log(noExite); //retorna un html colection vacio