//Crear un nuevo arreglo con el spread operator video 53
//utilizando la forma declarativa(no modifica el objeto actual)

const carrito = [];

//Definir un producto  creando un objeto
const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}
const producto3 = {
    nombre: "Teclado",
    precio: 50
}

//creando una nueva variable
let resultado;

resultado = [...carrito, producto];//mostrando el primer producto
resultado = [...resultado, producto2];//mostrando el segundo producto
resultado = [...resultado, producto3];//mostrando el tercer producto
resultado = [producto3, ...resultado, ];//mostrando el tercer producto al comienzo


//console.log(resultado);
console.table(resultado);