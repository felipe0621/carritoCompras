//object constructor video 46

//Object literal
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true    
}
console.log(producto);

//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 50 pulgadas', 50000);
console.log(producto2);

const producto3 = new Producto('Tablet', 20000);
console.log(producto3);