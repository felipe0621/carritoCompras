//Comparar dos valores
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si dos numeros son iguales pues solo se fija en el valor ==
console.log(numero1 == numero3); //imprime false
console.log(numero1 == numero2); //imprime true

//Comparador estricto se fija en el valor y el tipo de dato ===
console.log(numero1 === numero2); //imprime false
console.log(numero1 === parseInt(numero2)); //imprime true

console.log(typeof numero1); //imprime number
console.log(typeof numero2); //imprime string

//Diferente !=
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);

//Diferente estricto !==
console.log(numero1 !== numero2);//el numero 1 es estrictametne diferente del 2
console.log(numero1 !== parseInt(numero2)); //imprime false pues ya ambos son iguales