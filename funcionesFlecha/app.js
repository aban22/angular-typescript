//tsc -init
//tsc -w
var miFuncion = function (a) {
    return a;
};
var miFuncionFlecha = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionFlecha("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2Flecha = function (a, b) { return a + b; };
console.log(miFuncion2(1, 2));
console.log(miFuncion2Flecha(1, 2));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3Flecha = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("Normal"));
console.log(miFuncion3Flecha("Flecha"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
var hulk2 = {
    nombre: "Hulk2",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
hulk2.smash();
