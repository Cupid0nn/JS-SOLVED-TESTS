//write a function that takes an array of words and smashes them thogether into a sentence and returns the sentence.
//escribe una funcion que tome un array de palabras y las fusiona en una oracion y devuelve la oracion

//pasos:
//crear la funcion
//tomar las palabras y juntarlas con un espacio con .join(' ')

function smash(words) {
        return words.join(' ');
    }

console.log (smash(['hello', 'world', 'this', 'is', 'a', 'great','function']));