function removeVowels(str) {
    return str.replace(/[aeiou]/gi, ''); // le decimos que devuelve la cadena pero reemplazando lo que este dentro del array por nada
}

console.log(removeVowels('Hola mundo')); // 'Hl mnd'
console.log(removeVowels('Javascript')); // 'Jvscrpt'
