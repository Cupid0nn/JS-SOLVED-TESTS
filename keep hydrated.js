//make a function that convert hours into liters being 1 hour = 0.5 liters, return numbers of liters rounded to the smallest value
//crea una funcion que convierta horas en litros siendo 1 hora = 0.5 litros, devuelve el numero de litros redondeado al menor valor

//pasos:
// 1. creamos la funcion
// 2. creamos la variable
// 3. creamos la formula
// 4. retornamos la formula

function KeepHydrated(time) {
        return Math.floor(time * 0.5); // por cada numero de time lo multiplicamos por 0,5 que es la cantidad de litros y lo redondeamos con Math.floor(devuelve el entero mas cercano)
    }

    console.log(KeepHydrated(3));// 1
    console.log(KeepHydrated(11.8)); // 5