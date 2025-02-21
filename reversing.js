//write a function that reverse the words in a given string. A word can also fit an empety string
//escribe una funcion que revierta las palabras en una cadena dada. Una palabra puede tambien ser una cadena vacia

function Reverse(str){
     return str.split('').reverse().join('')
}


console.log (Reverse('Hello World!'))