// Metodos repeat y split
const producto = "Monitor de 20 pulgadas";

//.repeat que va a permitir una cadena de texto
const texto = ' En promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!!!`);  //comillas con alt +96

//.split para dividir un string

const actividad = "Estoy aprendiendo javaScrip moderno";
console.log(actividad.split(" ")); //aca me muestra 4 palabras separadas 

const hobbies = "Leer, caminar, escuchar música, escribir, aprende a programar";
console.log(hobbies.split(",")); //me lo muestra dividido por cada coma es decir 5 palabras

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split("#"));