"use stric";
const ciudades = ["Londres", "New york", "Madrid", "Viena", "Paris"];

//funcion anonima
ciudades.forEach(function (ciudad) {
  console.log(ciudad);
});

//funcion con nombre definida
function callback(ciudad) {
  console.log(ciudad);
}

ciudades.forEach(callback);

//listado paises
const paises = ["Francia", "España", "Portugal", "Argentina", "Paraguay"];
//se agrega un pais despues de dos segundos
function nuevoPais(pais, mostrarPaises) {
  setTimeout(function () {
    paises.push(pais);
    mostrarPaises();
  }, 2000);
}

//mostrar paises despues de un segundo
function mostrarPaises() {
  //simular que esta trayendo los paises de una api
  setTimeout(function () {
    let html = ``;
    paises.forEach(function (pais) {
      html += `<li>${pais}</li>`;
    });
    document.getElementById("app").innerHTML = html;
  }, 1000); //tarda 1 segundo en ejecutar la funcion
}
nuevoPais("Uruguay", mostrarPaises);
mostrarPaises();
