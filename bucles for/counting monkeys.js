//make a function that take an number and return an array of numbers
//crea una funcion que tome un numero y devuelva un array de numeros

function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i); // empuja el valor del iterador al final del array y siguen con el otro
    }
    return arr;
}

console.log(monkeyCount(20));
