//tsc -init
//tsc -w
function getNombre() {
    return "Fernando";
};

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;
//let texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";

let texto = `Hola, ${nombre}, ${apellido} (${edad})`;
let texto2 = `${1+3}`;
let texto3 = `${getNombre()}`;

console.log(texto);
console.log(texto2);
console.log(texto3);