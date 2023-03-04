//inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas"; // tipo char
console.log(producto);

//Reasignando el valor a una variable
producto = 'Monitor de 19 pulgadas' //tipo char
console.log(producto);

//JS lenguaje de tipo dinámico, no se especiica el tipo de dato
producto = 20; //tipo entero
console.log(producto);

//las variables se pueden inicializar sin valor y luego asignarlos

var disponible;
disponible = true;

disponible = false;



//Inicializar multiples variables
/*
var categoria = 'Computadoras';
var marca = 'Marca Famosa';
var calificacion = 5;*/
//lo mismo seria
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

//Las variables no pueden iniciar con numeros
//var 25dias; //eso no se puede   

//Variables con mas de una palabra
//camelcase  y la mas comun
var nombreProductoCategoria;  

//snake
var nombre_producto_categoria;

//pascalcase
//var Producto;