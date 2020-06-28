'use stric';
//definiciones basicas de arreglo*******************************************************************

const numeros=[10,20,30,40,50,60];
const meses = new Array('Enero','Febrero','Marzo','Abril');
const mezclado=['hola',20,true, null, false, undefined];

//metodos basicos para los arreglos*******************************************************************
console.log("La longitu del arreglo con length() "+meses.length);//longitud del arreglo
console.log("Array.isArray() verifica si la variable es un Array: "+Array.isArray(meses));//preguntar si la variable que le mostramos es un array
//agregar elementos a un array
meses[4]='junio';
meses.push('julio');
meses.unshift('Mes 0');//añade el elemento al principio del array
console.log(meses);
//encontrar un elemento dentro de un arreglo
console.log(meses.indexOf('Abril'));//encuetra tal cual el elemento
if(meses.indexOf('Enero')>=0){//si no existe trae -1 ya que el array empieza en 0 es decir busca el indice de elemento
    console.log('Existe el parametro');
}else{
    console.log('No existe el parametro');
}

//eliminar elementos de un array
meses.pop();//remueve el ultimo elemento del array
meses.shift();//remueve el elemento 0
meses.splice(2,1);//elimnar mediante un rango, con los parametros pocision y cuantos elementos eliminar desde esa posicion
meses.reverse();//cambia completamente el orden de un array

//unir dos arreglos
let Arreglo1=[1,2,3,4,5,6], Arreglo2=[7,8,9,10,11,12];
console.log(meses);
console.log("----------");
console.log("Concatenacion de arreglo");
console.log(Arreglo1.concat(Arreglo2));
console.log("-------------");
console.log("Ordenar por orden alfabetico");
const frutas=['Manzana','Pera','Naranja','Sandia'];
console.log(frutas.sort());
console.log("----------");
console.log("Ordenar numeros");
const numeros1=[5,6,1,15,6,7,8];
console.log(numeros1.sort(function(a,b){
    return a-b;
}));