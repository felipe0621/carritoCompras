//FUnciones en objetos y acceder a sus valores  palabra this

const producto = {
    nombre : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = {
    nombre : "portatil",
    precio : 3000,
    disponible : true,
    mostrarInfo: function(){
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();