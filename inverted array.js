//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//Con un conjunto  número aleatorio no negativo, tienes que devolver los dígitos de este número dentro de un array en orden inverso.

// separamos tareas
// verificar que los numeros no sean negativos
// convertir a string
// convertir a array
// invertir el array con la funcion reverse
// convertir a string
// convertir a numero

function invertedNums(num) {
    if (num < 0) {
        throw new Error("The number must be non-negative.");
    }
    let numString = num.toString();
    let numArray = numString.split("");
    numArray.reverse();
    let numString2 = numArray.join("");
    return Number(numString2);
}

console.log(invertedNums(123));