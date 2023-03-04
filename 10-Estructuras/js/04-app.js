//Mayor o igual y else if

// const dinero = 299;
// const totalAPagar = 300;

// if(dinero === totalAPagar){
//     console.log('Como es igual puedo pagar');
// }else if(dinero > totalAPagar){
//     console.log('Al ser mayor puedo pagar');
// }else {
//     console.log('al ser menor quiere decir no poseo esos fondos');
// }

//otro ejemplo con  if else if else

const dinero = 200;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar) {
    console.log('Si puedo pagar')
} else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
} else if(cheque){
    console.log('Si puedo pagar con cheque');
} else {
    console.log('No tengo los fondos suficientes ni tarjeta ni tampoco cheque por tanto no puedo pagar');
}