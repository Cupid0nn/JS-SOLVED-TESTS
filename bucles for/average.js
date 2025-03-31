//make a function that takes numbers and make an averge of the given list
//crea una funcion que tome numeros y haga el promedio de la lista dada

//pasos:
// 1. creamos la funcion
// 2. creamos la variable
// 3. creamos la formula
// 4. retornamos la formula

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5]));
