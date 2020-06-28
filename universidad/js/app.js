// Eliminar de Local Storage
//localStorage.clear();

let elemento;

elemento=document;
elemento=document.all;//todos los elementos del dom en forma de coleccion
elemento=document.head;//cabecera
elemento=document.body;//cuerpo
elemento=document.domain;//dominio en la que estas alojado
elemento=document.URL;//URL de la pagina
elemento=document.characterSet;
elemento=document.forms;
elemento=document.forms[0].id;//el id del formulario


let imagen=document.images;
let arrayImagenes=Array.from(imagen);

console.log(arrayImagenes);

arrayImagenes.forEach(function(imagen){
console.log(imagen);
});

console.log(elemento);