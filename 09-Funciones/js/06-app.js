//Parámetros por default

function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Felipe', 'Correa'); //ojo como son strings deben de ir entre comillas sencillas o dobles

//parametros por defult
function saludar(nombre = 'desconocido', apellido='desconocido'){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Felipe', 'Correa'); //ojo como son strings deben de ir entre comillas sencillas o dobles
saludar('Felipe');
saludar();

//parametros por defaul inicializadolos con un string vacio
function saludar(nombre = '', apellido=''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Felipe', 'Correa'); //ojo como son strings deben de ir entre comillas sencillas o dobles
saludar('Felipe');
saludar();