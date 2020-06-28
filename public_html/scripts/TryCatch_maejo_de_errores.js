function obtenerClientes(){
    console.log('Descargando...');
    setTimeout(function(){
        console.log('Descarga completa');
    },300);
}
obtenerClientes();
//funcion que no existe
try {
    algo();
} catch (error) {
    console.log(error);
}finally{
    console.log("No me importa, ejecuta de todos modos");
}