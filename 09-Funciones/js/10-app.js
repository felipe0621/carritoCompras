// Arrow functions

const aprendiendo = function(){
    console.log('Aprendiento JavaScript');
}
//aprendiendo();

//con arrow function
const aprendiendo2 = () => {
    console.log('Aprendiento JavaScript con');
}
//aprendiendo2();

//como la funcion anterior solo tiene una linea de codigo le puedo quitar las llaves como en el siguiente:
const aprendiendo3 = () => console.log('Aprendiento JavaScript con Udemy');
aprendiendo3();

//o tambien
const aprendiendo4 = () => 'Aprendiento JavaScript con Udemy pipe';
console.log(aprendiendo4());