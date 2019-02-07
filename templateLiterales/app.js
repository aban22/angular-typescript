"use strict";
//tsc -init
//tsc -w
function getNombre() {
    return "Fernando";
}
;
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var texto = "Hola, " + nombre + ", " + apellido + " (" + edad + ")";
var texto2 = "" + (1 + 3);
var texto3 = "" + getNombre();
console.log(texto);
console.log(texto2);
console.log(texto3);
