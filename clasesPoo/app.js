"use strict";
//tsc -init
//tsc -w
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scoot");
console.log(antman);
