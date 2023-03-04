//Do while loop
//el do while se va a ejecutar al menos una vez y no importa si se cumple o no la condicion
/*
let i = 0;

do {
    console.log(`Número ${i}`);

    i++

} while(i < 10); //condicion

*/
//ejemplo con el fizz buzz

let i = 1;

do {
    if(i % 3 === 0 && i % 5 === 0){ //tener en cuenta poner primero la de menos ocurrencia
        console.log(`${i} fizz buzz`);
    }else if( i % 3 === 0){
        console.log(`${i} fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} buzz`);
    }

    i++
} while(i < 100);