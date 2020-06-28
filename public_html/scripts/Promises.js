const esperando = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Se ejecuto");
  }, 5000);
});

esperando.then(function (mensaje) {
  console.log(mensaje);
});
