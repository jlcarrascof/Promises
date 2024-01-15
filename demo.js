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

const fetch = require('node-fetch');

let id = 15;
fetch(`https://jsonplaceholder.typicode.com/albums/${id}`) // Nueva Promesa
.then((response) => response.json()) // successHandler
.then((value) => console.log(value), (reason) => console.log(reason)); // errorHandler
