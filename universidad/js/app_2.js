'use stric'

//let elemento;
//elemento=document.getElementById('hero');

let encabezado;


//encabezado=document.getElementById('encabezado').textContent;//textConent trae el texto de la cabecera
//encabezado=document.getElementById('encabezado').innerText;//innerText trae el texto de la cabecera

encabezado=document.getElementById('encabezado');
//encabezado=document.querySelectorAll('img'); //tpdas las etiquetas img
encabezado=document.querySelector('#encabezado');//puede seleccionar clases ademas de id, pero se debe usar # o . dependiendo de lo que deseemos seleccionar

///otra forma de seleccionar elementos de un menu
//const menu=document.querySelector('#principal a:first-child');//el primer elemento
const menu=document.querySelector('#principal a:nth-child(3)');//el elemento seleccionado   
//const menu=document.querySelector('#principal a:last-child');//el ultimo elemento


encabezado.style.background='#333';
encabezado.style.color='#fff';
encabezado.style.padding='20px;'

encabezado.textContent='Los mejores cursos';

//console.log(encabezado);
console.log(menu);