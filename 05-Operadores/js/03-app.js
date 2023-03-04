//Comparar Null  undefined

//Undefined
let numero;


console.log(numero);//imprime undefined pues aunque esta declarada la variable no tiene valor

//console.log(typeof numero);//imprime undefined 

//Null
let numero2 = null;
console.log(numero2);// imprime null
//console.log(typeof numero2); // imprime object pues los null son objectos segun ECMA SCRIPT


//Comparando un null y undefined
console.log(numero == numero2);//aca imprime true
console.log(numero === numero2);//aca imprime false este compardor estricto es mas recomendable


