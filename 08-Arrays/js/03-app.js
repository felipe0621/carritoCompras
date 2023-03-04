// Recorrer un array con for

const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August',
'September', 'October', 'November', 'December'];

console.log(meses);
console.table(meses);

//Accediendo a todos los elementos del arreglo

//*primero debemos saber cuanto mide el arreglo
console.log(meses.length); // en este caso me imprime 12 es decir el arreglo mide 12 o tiene 12 elementos

//para recorrer el arreglo completo utilizamos el  for 

for(let i = 0; i < meses.length; i++){
    console.log(i);
}

//para que me muestre los meses
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
    
}
