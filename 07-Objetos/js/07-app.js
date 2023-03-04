//Problemas con los objetos
const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
}

producto.disponible = false; //imprime false  ya que las prop. de los objetos si se puede reasinar su valor
delete producto.precio; // para eliminar el precio

console.log(producto);