//Destructuring o extraer el valor de su estructura  

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    //imagen: "imagen.jpg",
}


//Destructuring en objetos
const {nombre} = producto;  //se debe de colocar dentro de llaves el nombre de la llave para que funcione

console.log(nombre);

//Destructuring con arreglos
const numeros = [10,20,30,40,50];

//const [primero] = numeros;  //dentro de corchetes puedo definir con cualquier nombre aca imprime 10
//console.log(primero);


//const [primero,segundo,tercero] = numeros; //aca imprime 30
//console.log(tercero);

//const [a,b,c,d,e] = numeros; //aca imprime 50
//console.log(e);

//const [ , , c] = numeros; //aca imprime 30 dejando los espacios de las otras qu no necesito
//console.log(c);

// const [ , , , , e] = numeros; //aca imprime 50 dejando los espacios de las otras qu no necesito
// console.log(e);

//onst [...e] = numeros; //aca imprime un arreglo con todos  y un arreglo con los demas 
//console.log(e);

//const [a, ...e] = numeros; //aca imprime un arreglo apartir del 20 
//console.log(e);

const [a, b, ...e] = numeros; //aca imprime un arreglo apartir del 30 
console.log(e);

