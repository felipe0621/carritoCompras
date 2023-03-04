//EL RETO DEL Fizz Buzz

//Si un numero es multilplo de 3 como  3-6-9-12 etc  imprimir fizz
//si un número es multiplo de 5  como  5-10-15-20 etc imprimir buzz
//si son multiplos de ambos como 15-30-45-60 etc imprimir fizz buzz

for(let i = 1; i < 100; i++){
    //console.log(i);
    if(i % 3 === 0 && i % 5 === 0){ //tener en cuenta poner primero la de menos ocurrencia
        console.log(`${i} fizz buzz`);
    }else if( i % 3 === 0){
        console.log(`${i} fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} buzz`);
    }
}
