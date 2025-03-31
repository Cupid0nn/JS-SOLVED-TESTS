//Crea una función que reciba un string y retorne el número de vocales (a, e, i, o, u) que contiene.

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hola mundo")); // 4
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("xyz")); // 0
