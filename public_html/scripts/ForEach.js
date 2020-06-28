'use stric';
const pendientes=['Tarea','Comer','Proyecto','Aprender','JavaScript'];
//con for
for(i=0;i<pendientes.length;i++){
    console.log(pendientes[i]);
}

//foreach
console.log("---------------");
console.log("Recorrer con forEach");
pendientes.forEach(function(pendiente, index){

    console.log(`${index} : ${pendiente}`);
});

//recorrer con map 
const carrito=[
    {id:1, producto:'Libro'},
    {id:2, producto:'Camisa'},
    {id:3, producto:'Guitarra'},
    {id:4, producto:'Disco'}
]

const nombreProducto=carrito.map(function(carrito){
    return carrito.producto;
});

console.log("El indice producto es: "+nombreProducto);
console.log(pendientes);

console.log("----------------------");
console.log("Recorrer un objeto con For normal");
for(let producto in carrito){
    console.log(`${producto} : ${carrito[producto]}`);
}