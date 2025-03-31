// write a method, that will get an integer arrray as parameter and will porcess every number from the array, and return a new array with processing every number of the input array like this:
// if the number has an integer square root, take this, otherwise square the number.
// example [4,3,9,7,2,1] -> [2,9,3,49,4,1]

//crear un metodo que tome un array de numeros enteros como parametro y devuelva un nuevo array con los numeros del array procesados de la siguiente manera:
// si el numero tiene una raiz cuadrada entera, toma esta, de lo contrario, cuadrado el numero.
// ejemplo [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(array) {
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 1 === 0) {
            array[i] = Math.sqrt(array[i]);
        } else {
            array[i] = array[i] * array[i];
        }
    }
    return array;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // Array(6) [ 2, 9, 3, 49, 4, 1 ]

 // explicacion:
 // creamos un bucle for que recorra el array hasta que i sea menor que la longitud del array (declaramos variable), (condicional), (iteramos)
 // si el array en la posicion i es mayor que 0
 // si la raiz cuadrada del array en la posicion i es un numero entero
 // la raiz cuadrada del array en la posicion i
 // si no
 // el array en la posicion i al cuadrado
 // retornamos el array