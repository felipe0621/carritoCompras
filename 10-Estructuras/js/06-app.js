// El operador && para revisar que se cumplan 2 omas condiciones

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');

}else if(!usuario && !puedePagar){
    console.log('No no puedes comprar');

} else if(!usuario){
    console.log('Inicia sesión o crea una cuenta');

} else if(!puedePagar){
    console.log('Fondos insuficientes');
} else {
    console.log('Elegiste una opcion invalida');
}
