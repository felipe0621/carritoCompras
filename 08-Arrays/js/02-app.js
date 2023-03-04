//Accediendo a los valores de un array

const numeros = [10,20,30,40,50, [1,2,3]];

console.log(numeros);
console.table(numeros);

//accediendo al arreglo
console.log(numeros[0]); //imprime 10
console.log(numeros[2]); //imprime 30
console.log(numeros[8]); //imprime undefined
console.log(numeros[5]); //imprime [1, 2, 3]
console.log(numeros[5][0]); //imprime 1



