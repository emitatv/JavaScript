
/*
const prompt = require('prompt-sync')(); // librerias || or && and

let distancia = parseInt(prompt("Ingrese la distancia en KM: ")); 

const precio_fijo = 5000;
let operacion_total;
let por_km;
while (distancia > 0){
    if (distancia <= 300){
    operacion_total = precio_fijo;
}
else if (distancia > 300 && distancia <= 1000){

    por_km = distancia * 30;
    operacion_total = precio_fijo + por_km;
}
else if (distancia > 1000){
    por_km = distancia * 20;
    operacion_total = precio_fijo + por_km;
}
console.log("El precio es: ", operacion_total);
    distancia = prompt("Ingrese devuelta la distancia en KM: "); 
}
*/
let lista = [1, 2, 3, 4];
console.log(lista[1]);


for (let i = 0; i<5; i++){
    console.log(lista[2]);
}

function franquito(){
    console.log(lista);
}

franquito();