// when provided whit a number between 0-9, return it in words
// cuando se provea con un numero entre 0-9, devolverlo en palabras

//pasos:
// crear la funcion
//tomamos el el valor y lo guardamos en una variable

// creamos un switch case
// creamos un if que verifique si la variable es menor que 0

// creamos un if que verifique si la variable es mayor que 9

// creamos un return

function switchItUp(number){
    let num = number;
    switch(num){
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return 'Number too big or too small';
    }
}

console.log(switchItUp(1));
console.log(switchItUp(9));
console.log(switchItUp(10));
console.log(switchItUp(-1));
console.log(switchItUp(-10));
console.log(switchItUp(4));