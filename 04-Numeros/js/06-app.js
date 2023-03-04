//Convertir strings a numeros 

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

//para imprimir el string
console.log(numero1); //imprime el string

//convierte el string a numero entero
console.log(Number.parseInt(numero1));
console.log(parseInt(numero1));

//convierte el string a numero decimal o flotante
console.log(Number.parseFloat(numero2));
console.log(parseFloat(numero2));

//Con NaN
console.log(Number.parseInt(numero3)); //imprime NaN
console.log(Number.parseFloat(numero3));//imprime NaN

//Revisar si un numero es entero o  no
console.log(Number.isInteger(numero1));
console.log(Number.isInteger(numero2));
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));


