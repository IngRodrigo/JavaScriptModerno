document.getElementById("txtBtn").addEventListener("click", cargarTXT);
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);
document.getElementById("apiBTN").addEventListener("click", cargarREST);

//cargar datos desde un txt
function cargarTXT() {
  ///se necesitan dos then, uno para conectarte a la api y retornar los datos en el formato que queremos y el otro para consumir los datos y usarlos en nuestra app
  fetch("datos.txt")
    .then(function (res) {
      return res.text(); //text() metodo para devover en formato de texto
    })
    .then(function (data) {
      console.log(data); //data el dato ya en formato deseado
      document.getElementById("resultado").innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
    });
  //.catch(function (res) {});
}

//cargar datos desde un json (archivo local)
function cargarJSON() {
  fetch("empleados.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let html = "";
      data.forEach((empleado) => {
        html += `
          <li>${empleado.nombre} ${empleado.puesto}</li>
        `;
      });
      document.getElementById("resultado").innerHTML = html;
    })
    .catch(function (error) {
      console.log(error);
    });
}

//cargar datos desde un API que devuelve un json

function cargarREST() {
  fetch("https://jsonplaceholder.cypress.io/todos")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach(function (dato) {
        html += `
        <li>
        ${dato.id} - ${dato.title} - ${dato.completed}
        </li>

        `;
      });
      document.getElementById("resultado").innerHTML = html;
    });
}
