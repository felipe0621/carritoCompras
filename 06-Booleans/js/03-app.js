//Buenas prácticas a la hora de evaluar un Boolean
const autenticado = true;

// if(autenticado){ // quiere decir si autenticado === true
//     console.log('Si puedes ver netflix');
// }else {
//     console.log('No, no puedes ver netflix')
// }

//con operador tenario
console.log(autenticado ? 'Si esta autenticado' : 'No está autenticado');