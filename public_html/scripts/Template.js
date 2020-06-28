"use stric";
const producto1 = "Pizza",
  precio1 = 30,
  producto2 = "Hamburgueza",
  precio2 = 48;

//template html basico en javaScript

html = `
<h1>Lista de productos</h1>
    <ul>
    <li>Orden: ${producto1}</li>
    <li>Precio: ${precio1}</li>
    <li>Orden: ${producto2}</li>
    <li>Precio: ${precio2}</li>
    <li>Total: ${total(precio1,precio2)}</li>
    </ul>
    `;
function total(precio1, precio2){
    return (precio1+precio2);
}

    document.getElementById("app").innerHTML = html;
