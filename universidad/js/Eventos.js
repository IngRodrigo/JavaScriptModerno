'use stric'

const encabezado=document.querySelector('#encabezado');
const enlace=document.querySelector('.enlace');
const boton=document.querySelector('#vaciar-carrito');

//evento click
boton.addEventListener('click',capturarEvento);
//evento doble click
//boton.addEventListener('dblclick',capturarEvento);
//mouse enter seria como hover
//boton.addEventListener('mouseenter',capturarEvento);
//mosuseleave seria cuando pierde el foco del mouse
//boton.addEventListener('mouseleave',capturarEvento);
function capturarEvento(evento){
    console.log(`El evento es: ${evento.type}`);
}