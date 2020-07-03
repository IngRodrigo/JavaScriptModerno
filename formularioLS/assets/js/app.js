//variables
const listaTweets = document.getElementById("lista-tweets");
//even listener
eventListeners();
function eventListeners() {
  //cuando se envia el forulario
  document
    .getElementById("formulario")
    .addEventListener("submit", agregarTweet);

  //Borrar Tweets
  listaTweets.addEventListener("click", borrarTweet);
}

//añadir tweet del formunlario

function agregarTweet(evento) {
  evento.preventDefault();
  //console.log("Formulario enviado");
  //leer el valor de textArea
  const tweet = document.getElementById("tweet").value;
  //crear boton de eliminar tweet
  const botonBOrrar = document.createElement("a");
  botonBOrrar.classList = "borrar-tweet";
  botonBOrrar.innerText = "X";
  //crear un elemento y agregar a la lista
  const li = document.createElement("li");
  li.innerText = tweet;
  //añade el boton de borrar
  li.appendChild(botonBOrrar);
  //añade el tweet a la lista
  listaTweets.appendChild(li);

  //añadir a Local Storage
  agregarTweetLocalStorage(tweet);
}

//funcion borrar tweet
function borrarTweet(evento) {
  evento.preventDefault();
  //
  if (evento.target.className === "borrar-tweet") {
    //console.log("Diste click en eliminar");
    console.log(evento.target.parentElement.remove());
    alert("Tweet Eliminado");
  }
}

//agregar el tweet a LocalStroage
function agregarTweetLocalStorage(tweet) {
  //variable
  let tweets;
  //Agregar a localStorgae
  localStorage.setItem("tweets", tweet);
}
//

function obtenerTweetsLocalStorage() {
  let tweets;
  //revisamos los valores del LocalStorage
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = localStorage.getItem("tweets");
  }
}
