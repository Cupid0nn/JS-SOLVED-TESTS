// consider an arrat/list of sheep where some of sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// tenemos una lista de ovejas donde algunas pueden estar faltando de su lugar. Necesitamos una funcion que cuente el numero de ovejas presentes en el array (true significa que esta presente).

// dividimos tareas
// 1. creamos la funcion
// 2. creamos un contador
// 3. recorremos el array
// 4. verificamos si el elemento es true
// 5. si es true, incrementamos el contador
// 6. retornamos el contador

function countSheeps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}

console.log(countSheeps([true, true, false, true, false, true, false]));

/*
Situación: Necesitas contar el número de ovejas presentes en un array (true significa que la oveja está presente).

Tarea: Crear una función que reciba un array de ovejas y devuelva el número de ovejas presentes.

Acción:

- Crear un contador 

- Recorrer el array con un bucle for.

- Verificar si el elemento es true.

- Si es true, incrementar el contador.

- Retornar el contador.

Resultado: La función devuelve el número de ovejas presentes en el array correctamente.
*/
