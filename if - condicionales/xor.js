// Exclusive OR. The function takes two booleans and returns true if exactly one of the two expressions is true, false otherwise
// OR Exclusivo. La función toma dos booleanos y devuelve true si exactamente uno de ellos es true, y false en caso contrario

function xor(a, b) {
  return a === b ? false : true; // si a es exactamente igual a b, devuelve false, si no, devuelve true
}

console.log(xor(true, true)); // false
console.log(xor(true, false)); // true
console.log(xor(false, true)); // true
console.log(xor(false, false)); // false
