// Escribe una función que reciba un array de números y retorne el mayor número de la lista.
function findBiggestNumber(array) {
    return Math.max(...array);
}

console.log(findBiggestNumber([1, 5, 3, 9, 2])); // 9
console.log(findBiggestNumber([-10, -5, -3])); // -3
console.log(findBiggestNumber([100, 50, 75])); // 100
