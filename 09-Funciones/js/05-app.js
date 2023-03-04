//Parámetros y argumentos en funciones video 62
//aca funcion sencilla
// function sumar(){
//     console.log( 2 + 5 );
// }

// sumar();

//funcion dinamica con parametros y argumentos
function sumar(a, b){  //aca a y b son parametros es decir los valores representativos o variables 
    console.log( a + b );
}

sumar(2, 5);  // aca  2 y 5 serian argumentos es decir los valores reales
sumar(525, 1892); //aca imprime la suma de los dos argumentos


function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar('Felipe', 'Correa'); //ojo como son strings deben de ir entre comillas sencillas o dobles
saludar('Pipe'); //aca imprime hola pipe undefined
saludar( ); //aca imprime hola undefined undefined
