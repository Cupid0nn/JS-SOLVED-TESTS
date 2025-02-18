// create a function that takes an integer as a an argument and returns "even" if the number is even, and "odd" if the number is odd
// crea una funcion que tome numeros entero como argumento y devuelva "even" si el numero es par, y "odd" si el numero es impar

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(evenOrOdd(2)); 

/*

Situación: Necesitabas determinar si un número entero es par o impar.

Tarea: Crear una función que reciba un número entero y devuelva "even" si el número es par, y "odd" si el número es impar.

Acción: Utilizaste una condición `if` para comprobar si el número es divisible por 2 sin dejar residuo. Si es así, la función devuelve "even"; de lo contrario, devuelve "odd".

Resultado: La función devuelve "even" si el número es par y "odd" si el número es impar correctamente.

*/