
console.log("vamos a jugar a pares y nones");
var jugador1 = prompt("jugador1 dinos un numero del 1 al 5");

console.log("el jugador 1 ha sacado" + jugador1);
var jugador2 = prompt("jugador1 dinos un numero del 1 al 5" );

console.log("el jugador2 ha sacado =" + jugador2);
jugador1 = Number(jugador1)
jugador2 = Number(jugador2)
var suma = jugador1 + jugador2;
console.log("la suma de la jugada es = " + suma);

if(suma % 2 ===0){
    console.log("el jugador 2 ha ganado");
    
}else{
    console.log("el jugador 1 ha ganado");
    
}


