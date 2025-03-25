//Escribe una función que reciba un array de números y devuelva el primer número negativo que encuentre. Si no hay números negativos, retorna null.

function firstNegative(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                return arr[i];
            }
        }
        return null;
    }

    console.log(firstNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // -11