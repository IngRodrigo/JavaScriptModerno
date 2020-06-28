'use stric';
const diaHoy= new Date();
//Fecha en especifico mes dia y año


let navidad2017=new Date('12-25-2017');


let valor;
//mes
valor=diaHoy.getMonth();
//dia
valor=diaHoy.getDate();
//dia
valor=diaHoy.getDay();

//año
valor=diaHoy.getFullYear();
//hora actual
valor=diaHoy.getHours();
//minuto actual
valor=diaHoy.getMinutes();
//milisegundos
valor=diaHoy.getTime();
//establecer valor con set

valor=diaHoy.setFullYear(2020);
valor=diaHoy.getFullYear();
console.log(navidad2017);
console.log(valor);