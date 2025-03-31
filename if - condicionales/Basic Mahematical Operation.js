// create a function that do basic math operations, the funct should take 3 arguments , operation, num1, num2, and the function should return the result
// crea una funcion que haga operaciones basicas, la funcion debe tomar 3 argumentos, la operacion, num1, num2, y la funcion debe devolver el resultado


// pasos:
// 1. creamos la funcion
// 2. creamos el switch case
// 3. retornamos el resultado

function Calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operation';
    }
}

console.log(Calculator('+', 2, 2)); // 4
console.log(Calculator('-', 2, 2)); // 0
console.log(Calculator('*', 2, 3)); // 6
console.log(Calculator('/', 2, 2)); // 1


// como se usa el switch case:
// el switch case es una estructura de control que permite ejecutar diferentes bloques de codigo dependiendo del valor de una variable o una expresion
// la sintaxis:
// switch (expression) {
//     case value1:
//         // code to be executed if expression is equal to value1
//         break;
//     case value2:
//         // code to be executed if expression is equal to value2
//         break;
//     case value3:
//         // code to be executed if expression is equal to value3
//         break;
//     default:
//         // code to be executed if none of the cases match
//         break;
// }

// el default es para cuando no se cumple ningun caso