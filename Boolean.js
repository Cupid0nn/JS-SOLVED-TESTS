// Complete the method that takes a boolean value and returna "yes" string for True, Or a "no" string for false
//completa un metodo que tome booleanos y devuelva "si" si es true y "no" si es false

function Booleans(bool) {
    if (bool === true) {
        return  "yes";
      }else {
        if (bool === false) return "no";
      }
      }

console.log(Booleans(true)); //'yes'
console.log(Booleans(false));//'no'



function Booleans2(bool) {
    return bool ? "yes" : "no";
}

console.log(Booleans2(true)); //'yes'
console.log(Booleans2(false));//'no'