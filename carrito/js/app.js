//variables
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");

//listeners

cargarEventListeners();
function cargarEventListeners() {
  //dispara cuando se preciona agregar carrito

  cursos.addEventListener("click", comprarCurso);
}

//funciones
//funcion que añade el curso al carrito
function comprarCurso(e) {
  e.preventDefault();

  //todas las clases que contiene el div y contains seleccionamos la que deseamos en este caso la clase agregar carrito
  //delegarion para agregar carrito
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    //enviamos el curso deseado para obeter sus datos
    leerDatosCurso(curso);
  }
}

//lee los datos del curso

function leerDatosCurso(curso) {
  const infoCurso = {
    image: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data"),
  };

  insertarCarrito(infoCurso);
}

//muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
        <img src="${curso.image}" width=100>
    </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>
    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
    </td>
  `;
  listaCursos.appendChild(row);
}
