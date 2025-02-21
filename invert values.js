// given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// dado un conjunto de numeros, devuelve la inversa aditiva de cada uno. Cada numero positivo se convierte en negativos, y los negativos se convierten en positivos

function invert(arr){
    return arr.map(x => -x); // mapeamos el array y lo multiplicamos por -1. en matematica basica lo que hace es invertir el signo
}

console.log(invert([1,-2,3,-4,5])); // [ -1, 2, -3, 4, -5 ]