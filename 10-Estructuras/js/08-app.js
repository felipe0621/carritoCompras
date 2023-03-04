// detener la ejecucion de un if con una funcion

const autenticado = true;

if(autenticado){
    console.log('Puedes acceder a la cuenta');
}

const puntaje = 400;

function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Excelente');
        return;
    }else if(puntaje > 300){
        console.log('Buen trabajo');
        return;
    }
}
revisarPuntaje();

