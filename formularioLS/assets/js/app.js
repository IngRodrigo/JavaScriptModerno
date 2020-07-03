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
  //Cargar contenido
  document.addEventListener("DOMContentLoaded", localStorageListo);
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
    evento.target.parentElement.remove();
    //buscar la etiqueta que queremos trabajar
    //console.log(evento.target.parentElement.innerText);
    borrarTweetLocalStorage(evento.target.parentElement.innerText);
  }
}

//agregar el tweet a LocalStroage
function agregarTweetLocalStorage(tweet) {
  //variable
  let tweets;
  //leer todos los tweets de localStorage
  tweets = obtenerTweetsLocalStorage();

  //añadir el nuevo tweets
  tweets.push(tweet);

  //conertir de String a arreglo para el local storage
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
//Comprobar que haya elementos en localStorage

function obtenerTweetsLocalStorage() {
  let tweets;
  //revisamos los valores del LocalStorage
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }

  return tweets;
}

//cuando se carga el contenido
function localStorageListo() {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function (tweet) {
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
  });
}

///eliminar tweet de localStorage
function borrarTweetLocalStorage(tweet) {
  let tweets, tweetBorrar;
  //el tweet llega con la X por ende usamos el substring para quitar la X
  tweetBorrar = tweet.substring(0, tweet.length - 1);
  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function (tweet, index) {
    if (tweetBorrar === tweet) {
      //splice elimina el elemento, mediante dos parametros
      //el indice del elemento y cuantos elementos elimnar apartir de ese (contandolo)
      tweets.splice(index, 1);
    }
  });
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
