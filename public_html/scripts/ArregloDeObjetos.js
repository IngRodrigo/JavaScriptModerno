'use stric';
//arreglo de objetos
const autos=[
    {modelo:'mustang', motor:6.0},
    {modelo:'Camaro', motor:5.0},
    {modelo:'Challenger', motor:7.0}
];

for(let i=0; i < autos.length; i++){
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}
