//Crear y comparar Booleans  estos solo admiten dos valores true or false
const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"

//console.log(boolean1);
//console.log(boolean2);
console.log(boolean3); //imprime true


console.log(typeof boolean1);
console.log(typeof boolean2);

//comparacion
console.log(boolean1 == boolean3); //imprime false pues bolean3 es un string

//creando objetos
const boolean4 = new Boolean(true);
console.log(boolean4);//envia a la consola el valor de true
console.log(typeof boolean4); //imprime object
