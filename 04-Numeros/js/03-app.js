// el objeto Math

let resultado;

//PI
resultado = Math.PI

//Redondear
resultado = Math.round(2.8); //redondea a 3
resultado = Math.round(2.2); //redondea a 2
resultado = Math.round(2.6);//redondea a 3
resultado = Math.round(2.5);//redondea a 2
resultado = Math.round(2.4);//redondea a 2

//Redondear hacia arriba
resultado = Math.ceil(2.5); //redondea a 3
resultado = Math.ceil(2.1); //redondea a 3

//Redondea hacia abajo
resultado = Math.floor(2.9); //redondea a 2
resultado = Math.floor(2.5); //redondea a 2

//Raiz cuadrada
resultado = Math.sqrt(144); //raiz cuadrada

//valor absoluto
resultado = Math.abs(-158);

//Potencia
resultado = Math.pow(8, 3);  //elevar 8  a la  3
resultado = Math.pow(2, 4);  //elevar 2  a la  4

//Minimo
resultado = Math.min(3,5,1,-5); //busca el numero minimo

//Maximo
resultado = Math.max(3,5,1,-5,100); //busca el maximo

//Aleatorio
resultado = Math.random(); //para un numero aleatorio del 0 al 1 
resultado = Math.random() * 20 ; //para un numero aleatorio del 0 al 20 

//Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30); //aleatorio entre 0 y 30


console.log(resultado);