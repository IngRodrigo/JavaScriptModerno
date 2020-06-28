'use stric'

function saludar(nombre){
if(typeof nombre=='undefined'){
    nombre='Rodrigo'
    
}
return `Hola ${nombre}`;
}
let saludo;
saludo=saludar();

console.log(saludo);

//funciones lift

(function(tecnorlogias){
    console.log("Funciones que se llaman a asi mismas.");
    console.log(`Aprendiendo ${tecnorlogias}`);
})('JavaScript');


//objeto con funciones dentro
const musica={
    reproducir: function(){
        console.log("Reproduciendo musica");
    },
    pausar:function(){
        console.log("Pausando la musica");
    }
}
//se puede agregar funciones a un objeto

musica.borrar=function(id){
    console.log(`Borrando la cancion con el ID: ${id}`);
}

musica.reproducir();
musica.pausar();
musica.borrar(2);