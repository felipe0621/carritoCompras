//Arrow function en el reproductor demusica   metodos de propiedad del archivo 09-app.js

//creando un objeto 
const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),    
    pausar: () => console.log('Pausando.....'),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombr => console.log(`Reproduciendo la playlist de ${nombre}`),

//utilizando set and get
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }

}
//para llamara los get y set
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;



reproductor.reproducir(30); //argumento
reproductor.reproducir(200); //argumento
reproductor.reproducir(10); //argumento

reproductor.pausar();
reproductor.borrar(200);
reproductor.crearPlaylist('Heavy metal');
reproductor.crearPlaylist('Rock en español');
reproductor.reproducirPlaylist('Merengue');