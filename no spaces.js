//remove spaces from the strings given
//saca los espacios de las cadenas dadas

function NoSpaces(str){
    return str.split(' ').join('');
}

console.log(NoSpaces('hello world')); // 'helloworld'

// otra solucion es :

function NoSpaces2 (str){
    return str.replace(/\s/g, ''); //usamos el metodo replace para reemplazar los espacios por nada y g es para que lo haga en toda la cadena
}

console.log(NoSpaces2('hello world')); // 'helloworld'