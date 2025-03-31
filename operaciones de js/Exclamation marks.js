//Remove an exclamation mark from the end of a string. For a begginer kata, you can assume that the input data is always a string, no need to verify it.
//Remove un signo de admiracion del final de una string. Para un kata de principiante, puedes suponer que el dato de entrada es siempre una string, no es necesario verificarlo.

//pasos.
// 1. creamos la funcion
// 2. removemos el string sin el signo de exclamacion
// 3. retornamos el string

function RemoveString(string) { //creamos la funcion
   return string.replace('!','');
}

console.log(RemoveString('hola!'));//'hola'
console.log(RemoveString('hola'));//'hola'
console.log(RemoveString('!hola'));//'hola'