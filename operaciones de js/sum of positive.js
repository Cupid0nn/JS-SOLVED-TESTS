// get an array of numbers, and return sum of all positive numbers
// obten una array de numeros y devuelve la suma de todos los numeros positivos

function positiveSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { //recorremos el array hasta que i sea menor que la longitud del array (declaramos variable), (condicional), (iteramos)
        if (arr[i] > 0) {  // si el array en la posicion i es mayor que 0
            sum += arr[i];
        }
    }
    return sum;
    
}

console.log(positiveSum([1,2,3,4,5,-60]));

/*

Situación: Necesitabas sumar todos los números positivos en un array.

Tarea: Crear una función que reciba un array de números y devuelva la suma de todos los números positivos en el array.

Acción: Recorres el array con un bucle `for`, verificando si cada número es positivo y, si es así, lo sumas a una variable `sum`.

Resultado: La función devuelve la suma de todos los números positivos en el array correctamente.

*/