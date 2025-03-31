//make a function that takes an array of numbers and returns the average of the numbers, even with commas
// crea una funcion que tome un array de numeros y devuelva el promedio de los numeros, incluso con coma

// pasos para realizar la tarea
// declarar variable
// recorrer el array
// sumar los numeros
// dividir la suma entre la longitud del array o lo que es lo mismo divir la suma por la cantidad de numeros en el array

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(average([8, 6, 8, 7]));
