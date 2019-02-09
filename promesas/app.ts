//tsc -init
//tsc -w

let promesa1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Promesa Terminada");

        //Termina bien
        resolve();

        //Termina mal
        // reject();
    }, 1500)
});

console.log("Paso 1");

promesa1.then(
    function() {
        console.log("Ejecutarme cuando se termine bien")
    },
    function() {
        console.error("Ejecutarme si algo sale mal")
    }
);

console.log("Paso 2");