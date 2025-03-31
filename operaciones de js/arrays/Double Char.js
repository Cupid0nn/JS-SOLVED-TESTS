//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Dado una cadena, tienes que devolver una cadena en la cual cada letra (mayúscula o minúscula) se repite una vez.
// ejemplo:
// "Hello World" -> "HHeelllloo  WWoorrlldd"
// "1234!_ " -> "11223344!!__  "

//pasos: 
// 1. creamos la funcion
// 2. usamos el metodo repeat para repetir el string
// 3. retornamos el string

function doubleChar(str) {
    return str.split('').map((char) => char.repeat(2)).join(''); // split separa el string en un array de caracteres, map lo recorre y lo repite 2 veces, join lo une
}

console.log(doubleChar("Hello World")); // 'HHeelllloo  WWoorrlldd'