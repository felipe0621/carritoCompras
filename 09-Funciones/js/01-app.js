/* las funciones son una serie de procedimientos o instrucciones , lineas de codigo que van a realizar una accion sus ventajas
-permiten tener un codigo mas ordenado y por lo tanto mas facil de mantener
-son reutilizables por ejemplo tenen una funcion que valide un formulario y utlizarla en todos los formularios
-por ejemplo tener una funcion que envie datos a un servidor y reutilizarla multiples veces

Existen dos formas de crear funciones 
1-declararcion de funcion
2-expresion de funcion
*/

//Declaracion de funcion (Function declaration)

function sumar(){    //en los parentesis se colocan los parametros de ser necesario
    //lo que va dentro de las llaves es el cuerpo de la funcion
    console.log(2 + 2);
}
//para que funcione debo de mandar llamar la funcion
sumar();

//esta funcion la puedo utilizar multiples veces ejemplo
sumar();
sumar();
sumar();
sumar();


///segunda forma 
//Expresión de funcion(Function expression)   y es muy similar a crear una variable
const sumar2 = function(){
    console.log( 3 + 4);
}
sumar2();