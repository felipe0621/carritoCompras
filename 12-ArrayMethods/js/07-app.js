//.concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']; //arreglo con indices
const meses2 = ['Agosto', 'Septiembre', 'Octubre']; //arreglo con indices
const meses3 = ['Noviembre', 'Diciembre']; //arreglo con indices

//con  .concat
const resultado = meses.concat(meses2);
console.log(resultado); // aca concatena meses y meses2

const resultado2 = meses.concat(meses2, meses3);
console.log(resultado2); // aca concatena meses, meses2 y meses 3


//con spread operator   al colocar ... al comienzo se debe asegurar qeu sea un arreglo el que se va a copiar
const resultado3 = [...meses, ...meses2];
console.log(resultado3); //aca concatena los meses y meses 2

const resultado4 = [...meses, ...meses2, ...meses3];
console.log(resultado4); //aca concatena meses, meses2 y meses 3