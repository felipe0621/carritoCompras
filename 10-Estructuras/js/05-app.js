// Switch case  para evaluar multiples condiciones video 75

//const metodoPago = 'Tarjet';

// switch (metodoPago) {
//     case 'efectivo':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'cheque':
//         console.log(`Pagaste con ${metodoPago}`); 
//         break;
//     case 'Tarjeta':
//         console.log(`Pagaste con ${metodoPago}`);    
//         break;

//     default:
//         console.log('Aun no has seleccionado un metodo de pago o método de pago no soportado');
//         break;
// }



//SWITCH agregando funciones
const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`); 
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago}`);    
        break;

    default:
        console.log('Aun no has seleccionado un metodo de pago o método de pago no soportado');
        break;
}

function pagar(){
    console.log('pagando con efectivo...');
}