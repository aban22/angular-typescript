"use strict";
//tsc -init
//tsc -w
var apellido = "Peter";
//apellido = 123;     //TypeScript No permite hacer esto, nombre ya es de tipo string
var nombre = "Peter";
var numero = 123;
var booleano = true;
var hoy = new Date();
hoy = new Date("2020-10-21");
console.log(hoy);
var cualquiera = nombre;
cualquiera = numero;
var spiderman = {
    nombre: "Peter",
    edad: 20
};
//spiderman = nombre;   //No deja
spiderman.edad = 30;
//spiderman.poder = "Trepar";   //No deja porque no lo tiene el objeto spiderman
