//Crea una función que tome un string y elimine los espacios en blanco solo al principio y al final, pero conserve los espacios internos.

function NoSpaces(str) {
    return str.trim(); // trim lo que hace es quitar los espacios en blanco al principio y al final
}

console.log(NoSpaces(' hello world   '));// 'hello world'
console.log(NoSpaces("  Hola mundo  ")); // "Hola mundo"
console.log(NoSpaces("JavaScript  ")); // "JavaScript"
console.log(NoSpaces("  Espacios   ")); // "Espacios" 