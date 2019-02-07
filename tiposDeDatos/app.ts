//tsc -init
//tsc -w

let apellido = "Peter";

//apellido = 123;     //TypeScript No permite hacer esto, nombre ya es de tipo string

let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();
hoy = new Date("2020-10-21");

console.log(hoy);


let cualquiera:any = nombre;
cualquiera = numero;


let spiderman = {
    nombre: "Peter",
    edad: 20
};

//spiderman = nombre;   //No deja
spiderman.edad = 30;
//spiderman.poder = "Trepar";   //No deja porque no lo tiene el objeto spiderman