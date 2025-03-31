
function HighLowsum(arr) {
    let maxValue = Math.max(...arr);// Encontramos el valor más alto en el array y lo guardamos en la variable maxValue
    let minValue = Math.min(...arr);// lo mismo para el valor más bajo

    let arrayfiltrado = arr.slice(); // Creamos una copia del array original utilizando el método slice
  
    arrayfiltrado.splice(arrayfiltrado.indexOf(maxValue), 1); // Eliminamos una instancia del valor más alto del array copiado utilizando splice
    arrayfiltrado.splice(arrayfiltrado.indexOf(minValue), 1); // Eliminamos una instancia del valor más bajo del array copiado utilizando splice
  
    let sum = arrayfiltrado.reduce((a, b) => a + b, 0);  // Sumamos los elementos restantes del array filtrado utilizando el método reduce
    console.log(arrayfiltrado); //mostramos el array filtrado
    console.log (sum); // mostramos la suma
  }
  
  // Llamada de prueba a la función HighLowsum con un array de ejemplo
  HighLowsum([2, 4, 6, 20, 34]);
    

  /*

Situación: Necesitabas encontrar y sumar los números en un array excluyendo el número más alto y el más bajo.

Tarea: Crear una función que reciba un array de números, elimine el valor más alto y el más bajo, y devuelva la suma de los números restantes.

Acción: Encontraste los valores máximo y mínimo utilizando `Math.max` y `Math.min`, hiciste una copia del array utilizando `slice`, eliminaste una instancia de los valores máximo y mínimo utilizando `splice`, y sumaste los números restantes utilizando `reduce`.

Resultado: La función devuelve la suma de los números en el array excluyendo el valor más alto y el más bajo correctamente.

*/