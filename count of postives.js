// return an array, where the fisrt element is the count of positive numbers and the second element is sum of negative numbers
// devolver un array donde el primer elemento es la cantidad de numeros positivos y el segundo elemento es la suma de numeros negativos

// pasos:
// 1. creamos la funcion
// 2. creamos las variables
// 3. recorremos el array
// 4. verificamos si el array en la posicion i es mayor que 0
// 5. si es mayor que 0, incrementamos el contador de positivos
// 6. si es menor que 0, incrementamos el contador de negativos
// 7. retornamos el array

function countPositivesSumNegatives(array) {
    let positives = 0, negatives = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positives++;
        } else if (array[i] < 0) {
            sum += array[i];
        } else if (array[i] === 0) {
            return [];
        }
    }

    return [positives, sum];
}

console.log (countPositivesSumNegatives([null])); // [ 0, 0 ]
console.log (countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); //[ 10, -65 ]
