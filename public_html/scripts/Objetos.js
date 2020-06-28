//crear objetos
//objetos usa llaves
const persona1={
    nombre: 'Rodrigo',
    apellido: 'Sánchez',
    profesion: 'Programador',
    email: 'dev_rodrigo@gmail.com',
    edad:28,
    musica:['Rock','Blus','Romance'],
    hogar:{
        ciudad:'Capiatá',
        pais:'Paraguay'
    },//objeto dentro del objeto
    nacimiento:function(){//funcion dentro de un objeto
        return new Date().getFullYear()-this.edad;
    }

}

/*console.log(persona);
//se accede a los elementos por la propiedad no por indice
console.log("El nombre de la persona es: "+persona.nombre);
console.log("El tipo de musica que mas le gusta es el: "+persona.musica[0]);
console.log("La ciudad del objeto persona es: "+persona.hogar.ciudad);
console.log("El año de nacimieno de la persona es: "+persona.nacimiento());*/


///otra forma de crear objetos
function Cliente(nombre, saldo){
this.nombre=nombre;
this.saldo=saldo;
this.tipoCliente=function(edad){
    let tipo;
    if(this.saldo>1000){
        tipo='Glod';
    }else if(this.saldo>500){
        tipo='Platinum';
    }else{
        tipo:'Normal';
    }
    return;
}

}

const persona= new Cliente('Rodrigo',1200);
console.log(persona);

console.log("funciona");