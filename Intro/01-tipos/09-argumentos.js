/* function suma() {
    return 2 + 2;
} */

/* function suma(a, b) {
    return a + b;
} */

function suma(a, b) {
    console.log(arguments)
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
