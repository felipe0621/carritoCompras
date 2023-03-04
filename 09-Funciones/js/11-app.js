//Las ventajas delos arrow functions

const aprendiendo = function(){
    console.log('Aprendiento JavaScript');
}
aprendiendo();

//con 1 parametro 
const aprendiendo1 = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo1('javascript');

//con dos parametros
const aprendiendo2 = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo2('javascript', 'Java');




//ARROW FUNCTIONS sin parametros 
// const aprendiendo2 = () => console.log('Learning JavaScript');
// aprendiendo2();

const aprendiendo3 = () => 'Learning JavaScript';
console.log(aprendiendo3());

//Arrow funcitons con 1 parametro
const aprendiendo4 = (lenguaje) => `Learning ${lenguaje}`;
console.log(aprendiendo4('JS'));

//cuando se tiene un solo parametro se puede quitar los parentesis sin ningun problema ejemplo:
const aprendiendo5 = lenguaje => `Learning ${lenguaje}`;
console.log(aprendiendo5('JScript'));


//arrow function con dos parametros
const aprendiendo6 = (lenguaje, lenguaje2) => `Learning ${lenguaje} y ${lenguaje2}`;
console.log(aprendiendo6('JS', 'Java'));