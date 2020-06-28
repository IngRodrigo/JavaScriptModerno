'use stric'
const busqueda=document.querySelector('#buscador');

//keydown se ejecuta cuando se presiona una tecla
//busqueda.addEventListener('keydown',capturarEvento);
//se ejcuta cada ves que suelto la tecla al escribir
//busqueda.addEventListener('keyup',capturarEvento);
//cada ves que escribes algo no ipmorta si sueltas o presionas
//busqueda.addEventListener('keypress',capturarEvento);
//focus
busqueda.addEventListener('focus',capturarEvento);
//blur similar al focusLost
busqueda.addEventListener('blur',capturarEvento);
//captura cuando el usuario le da cortar el texto
busqueda.addEventListener('cut',capturarEvento);

//captura cuando el usuario le da copiar al texto
busqueda.addEventListener('copy',capturarEvento);
function capturarEvento(evento){

    document.querySelector('#encabezado').innerText=busqueda.value;
    console.log(`El evento es: ${evento.type}`);
}