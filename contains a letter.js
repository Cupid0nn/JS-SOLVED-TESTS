//dado un array buscar si alguna letra se encuentra en una palabra o oracion y devolver un true o un false

function containsLetter(word, letter) {
        return word.includes(letter);
    }

    console.log(containsLetter('hello', 'l'));