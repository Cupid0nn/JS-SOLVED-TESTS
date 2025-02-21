// create a function whit two arguments that will return an array of the first (n) multiplied of (x), asuming both the given numbers and the number of times count will be postive numbers greater than 0, return the resunt as an array 
// crea una funcion que tome 2 argumentos que devuelva un array de los primeros (n) multiplos de (x) suponiendo que ambos argumentos y el numero de veces que se va a contar seran numeros positivos mayores a 0, devolver el resunt como un array

// pasos:
// 1. creamos la funcion
// 2. creamos las variables
// 3. creamos un array vacio
// 4. creamos un for que recorra el array





function CountByX (x,n){
    let array = []
    for (let i = 1; i <= n; i++){ // este for recorre el array hasta que i sea menor o igual que n (declaramos variable), (condicional), (iteramos)
        array.push(i*x)  // array.push agrega un elemento al final del array siendo la iteracion multiplicada por x, todo se almacena en array
    }
    return array // retornamos el array
}

console.log (CountByX(2,5)); // [ 2, 4, 6, 8, 10 ]