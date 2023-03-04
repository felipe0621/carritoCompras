//Añadir funciones a un objeto video 66  metodos de propiedad

//creando un objeto 
const reproductor = {
    reproducir: function(id){   //esto es un metodo de propiedad
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando.....')
    },
    borrar: function(id){
        console.log(`Borrando canción ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist de ${nombre}`);
    }

}

reproductor.reproducir(30); //argumento
reproductor.reproducir(200); //argumento
reproductor.reproducir(10); //argumento

reproductor.pausar();
reproductor.borrar(200);
reproductor.crearPlaylist('Heavy metal');
reproductor.crearPlaylist('Rock en español');
reproductor.reproducirPlaylist('Merengue');