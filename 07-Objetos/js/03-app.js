//Agregar o elimnar propiedades de un objeto  video 37

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    //imagen: "imagen.jpg",
}

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//para eliminar una propiedad del objeto 
delete producto.disponible;

console.log(producto);