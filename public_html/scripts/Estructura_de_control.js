'use stric';

const edad=17;
if(edad>=18){
    console.log("Si puede entrar");
}else{
    console.log("No puedes entrar");
}

//comprobar si la variable tiene valor
let puntaje;
if(typeof puntaje!='undefined'){
console.log(`El puntaje es ${puntaje}`);
}else{
    console.log("No hay puntaje");
}

let efectivo=500;
let totalCarrito=300;
if(efectivo>totalCarrito){
    console.log('Pago correcto');
}else{
    console.log('Fondos insuficientes');
}
let hora=7;
if(hora<=10){
    console.log("Buenas tardes");
}else if(hora<=18){
    console.log('Buenas tardes');
}else{
    console.log('Buenas noches');
} 


console.log("--------------------");
console.log("IF ternario");
const logueado=true;
console.log(logueado==true ? 'Si se logueo': 'no se logueo');