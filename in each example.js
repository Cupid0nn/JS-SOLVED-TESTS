// haz un ejemplo de una funcion con las herramientas de java, if, replace, for, return, etc


//metodos para arrays
//1- sort (ordenar)
//2- reverse (invertir)
//3- join (unir)
//4- map (mapear)
//5- filter (filtrar)
//6- reduce (reducir)
//7- slice (cortar) 
//8- splice (espiar)
//9- concat (concatenar)
//10- push (empujar)
//11- pop (sacar)
//12- shift (sacar)
//13- unshift (empujar)
//14- indexOf (buscar)
//15- lastIndexOf (buscar)
//16- find (buscar)
//17- findIndex (buscar)
//18- every (verificar)
//19- some (verificar)
//20- forEach (recorrer)


// ejemplos de metodos
// 1- sort (ordenar)
var array = [1, 2, 3, 4, 5];
array.sort();

// 2- reverse (invertir)
var array = [1, 2, 3, 4, 5];
array.reverse();

// 3- join (unir)
var array = [1, 2, 3, 4, 5];
var string = array.join('-');

// 4- map (mapear)
var array = [1, 2, 3, 4, 5];
var newArray = array.map(function(item) {
    return item * 2;
});

// 5- filter (filtrar)
var array = [1, 2, 3, 4, 5];
var newArray = array.filter(function(item) {
    return item % 2 === 0;
});

// 6- reduce (reducir)
var array = [1, 2, 3, 4, 5];
var sum = array.reduce(function(total, item) {
    return total + item;
}, 0);  

// 7- slice (cortar)
var array = [1, 2, 3, 4, 5];
var newArray = array.slice(1, 4);

// 8- splice (espiar)
var array = [1, 2, 3, 4, 5];
array.splice(1, 2);

// 9- concat (concatenar)
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var newArray = array1.concat(array2);

// 10- push (empujar)
var array = [1, 2, 3];
array.push(4);

// 11- pop (sacar)
var array = [1, 2, 3];
array.pop();

// 12- shift (sacar)
var array = [1, 2, 3];
array.shift();

// 13- unshift (empujar)
var array = [1, 2, 3];
array.unshift(0);

// 14- indexOf (buscar)
var array = [1, 2, 3, 4, 5];
var index = array.indexOf(3);

// 15- lastIndexOf (buscar)
var array = [1, 2, 3, 4, 5];
var index = array.lastIndexOf(3);

// 16- find (buscar)
var array = [1, 2, 3, 4, 5];
var item = array.find(function(item) {
    return item === 3;
});

// 17- findIndex (buscar)
var array = [1, 2, 3, 4, 5];
var index = array.findIndex(function(item) {
    return item === 3;
});

// 18- every (verificar)
var array = [1, 2, 3, 4, 5];
var result = array.every(function(item) {
    return item < 6;
});

// 19- some (verificar)
var array = [1, 2, 3, 4, 5];
var result = array.some(function(item) {
    return item < 6;
});

// 20- forEach (recorrer)
var array = [1, 2, 3, 4, 5];
array.forEach(function(item) {
    console.log(item);
});

// 21- spred operator (operador de propagación)
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [...array1, ...array2]; // array3 es [1, 2, 3, 4, 5, 6]

// 22- rest operator (operador de rest)
function sum(...args) {
    return args.reduce(function(total, item) {
        return total + item; // total es 0
    }, 0);
}

// de esta forma puedes dividir un problema segun lo que se requiere, ejemplo:
// se requiere buscar algo? puedes usar find o findIndex
// se requiere recorrer algo? puedes usar forEach, map, filter, reduce, etc
// se requiere crear algo? puedes usar push, pop, shift, unshift
// se requiere modificar algo? puedes usar splice
// se requiere unir algo? puedes usar join
// etc