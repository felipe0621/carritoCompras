//Diferencia entre function expresion y declaration

sumar();  //aca funciona 
function sumar(){    //en los parentesis se colocan los parametros de ser necesario
    //lo que va dentro de las llaves es el cuerpo de la funcion
    console.log(2 + 2);
}




///segunda forma 
//Expresión de funcion(Function expression)   y es muy similar a crear una variable
sumar2();    //aca no funciona
const sumar2 = function(){
    console.log( 3 + 4);
}
