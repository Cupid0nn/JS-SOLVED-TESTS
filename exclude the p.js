// toma cualquier string y devuelve el mismo string sin las letras p que esten en el string

function noP(string) {
    return string.replace(/p/g, ''); //usamos el metodo replace para reemplazar las p por nada y g es para que lo haga en toda la cadena
}
console.log(noP('pepe')); //'ee'