//tsc -init
//tsc -w

let miFuncion = function(a:any) {
    return a;
};

let miFuncionFlecha = (a:any) => a;



console.log(miFuncion("Normal"));
console.log(miFuncionFlecha("Flecha"));



let miFuncion2 = function(a:number, b:number) {
    return a + b;
};

let miFuncion2Flecha = (a:number, b:number) => a + b;

console.log(miFuncion2(1, 2));
console.log(miFuncion2Flecha(1, 2));


let miFuncion3 = function(nombre:string) {
    nombre = nombre.toUpperCase();
    return nombre;
};

let miFuncion3Flecha = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
};

console.log(miFuncion3("Normal"));
console.log(miFuncion3Flecha("Flecha"));



let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout(function(){
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
}

let hulk2 = {
    nombre: "Hulk2",
    smash() {
        setTimeout(() => console.log(this.nombre + " smash!!") , 1500);
    }
}

hulk.smash();
hulk2.smash();
