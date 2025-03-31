function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5 + 32).toFixed(0); // la formula dice "hay que multiplicar por 9, dividir por 5 y sumar 32", el toFixed es para redondear
}

console.log(celsiusToFahrenheit(0));   // '32'
console.log(celsiusToFahrenheit(100)); // '212'
