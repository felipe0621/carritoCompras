//While loop    video 83
/*se ejecuta mientras una condicion sea verdadera*/

//let i = 0;

// while(i < 10){ //condición
//     console.log(`Número ${i}`);

//     i++; //incremento
//}


//ejemplo con fizz buzz
/*
let i = 1;

while(i < 100){
    if(i % 3 === 0 && i % 5 === 0){ //tener en cuenta poner primero la de menos ocurrencia
        console.log(`${i} fizz buzz`);
    }else if( i % 3 === 0){
        console.log(`${i} fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} buzz`);
    }
    i++;

}*/

//ejemplo detectando pares y nones con while 
 
let i = 1;

while(i < 100){
    //console.log(i);
    if(i % 2 == 0){
        console.log(`El número ${i} es par`);
    }else {
        console.log(`El número ${i} es impar`);
    }


    i++;
}
