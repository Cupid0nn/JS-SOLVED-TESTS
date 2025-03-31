//make the number negative, if it is negative already return the number
//crea una funcion que tome un numero y devuelva el numero negativo si el numero es negativo devuelve el mismo

function makeNegative(num) {
    if (num < 0) {
        return num;
    } else {
        return -num;
    }
}

console.log(makeNegative(5));
console.log(makeNegative(-1));