//Comparador estricto video 72

const puntaje = 1000;    //un solo igual es asignacion   , dos comparar 
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// if(puntaje != 1000){   //== igual a ,    != diferente    
//     console.log('Si es diferente..');
// } else {
//     console.log('Es diferente de 1000');
// }


if(puntaje === 1000){   
    console.log('Si es igual..');
} else {
    console.log('Es diferente ');
}


if(puntaje !== '1000'){   
    console.log('Si es diferente..');
} else {
    console.log('Es diferente ');
}

//== operardor no estricto solo revisa el valor
//=== operador estricto es decir revisa el valor y el tipo de dato 
//=== estrictamente igual
//!== estrictamente diferente