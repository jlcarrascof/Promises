/*
function suma(a, b) {
    return a + b;
}

console.log(suma(5, 3));

function operaciones(fn) {
    setTimeout(() => {
        console.log(fn(5, 3));
    }, 2000);
    console.log('Holiii 😀');
    console.log('Buenas 🙂');
}

operaciones(suma);
*/

// Promesa: Es el eventual resultado de una operación asíncrona.

// Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona.

/*

{
    state: 'pending',
    result: undefined
}

*/

// Ejemplo

// const myPromise = new Promise();

/*
    myPromise = "Tomar un vuelo para las vacaciones"

    1.- Comprar el boleto.
    2.- Hacer la maleta.
    3.- Ir al aeropuerto.
    4.- Tomar el vuelo.
    5.- Llegar al destino.
*/

// myPromise();

/*
const precioBoleto = 1600;
const myPromiseOne = new Promise(function (resolve, reject) {
    const saldo = 1000;
    setTimeout(() => {
        if (precioBoleto < saldo) {
            resolve('Comprar el boleto');
            // El resolve cambia internamente el estado de la promesa a fulfilled.
        } else {
            reject('No hay saldo suficiente');
            // El reject cambia internamente el estado de la promesa a rejected.
        }    
    }, 2000);
});

console.log(myPromiseOne);

myPromiseOne.then(function (value) {
    // función successHandler que maneja el resultado de la promesa en caso de que se resuelva.
    console.log(myPromiseOne);
    console.log("Me resolvi a :", value);
}, function (reason) {
    // función errorHandler que maneja el resultado de la promesa en caso de que se rechace.
    console.log(myPromiseOne);
    console.log("Me rechazaron por: ", reason);
});
*/

const hora = 12;
const myPromiseTwo = new Promise(function (resolve, reject) {
    const horaLlegada = 11;
    setTimeout(() => {
        if (hora - horaLlegada >= 2) {
            resolve('Qué puntualidad!!');
        } else {
            reject('Llegaste Tarde!!');
        }
    }, 2000);
});

console.log(myPromiseTwo);
