//tsc -init
//tsc -w

let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};



// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// console.log(nombre, clave, poder);


let {nombre, clave, poder} = avenger;

console.log(nombre, clave, poder);


let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);

let [, , iron] = avengers;

console.log(iron);