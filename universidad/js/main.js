
/*document.querySelector('#submit-buscador').addEventListener('click',function(evento){
    evento.preventDefault();//preventDefault evita que se ejecute el evento por defecto
    alert('Buscando');
});*/


document.querySelector('#submit-buscador').addEventListener('click',buscarCurso);

function buscarCurso(evento){
    evento.preventDefault();
    let miEvento;

    miEvento=evento.target;//trae el elemento al que le dimos clic, con sus propiedades
    miEvento=evento.target.id;//trae el id del elemento al que le dimos clic
    
    
    console.log('Desde la funcion externa');
    console.log(miEvento);
}


//seleccionamos un texto del dom

document.querySelector('#encabezado').addEventListener('click',pruebaClick);

function pruebaClick(evento){
    let elemento;
    elemento=evento.target.innerText;
    evento.target.innerText='Mi nuevo encabezado';
    console.log('Desde el encabezado');
    console.log('El texto del encabezado es: '+elemento);
}