# Fundamentos de Programación

## Descripción

>[!IMPORTANT]
Este documento explica los fundamentos esenciales de la programación y cómo abordar la resolución de problemas mediante estructuras y métodos adecuados.

## Enfoque para Resolver Problemas

La programación es el proceso de encontrar soluciones a problemas complejos mediante el uso de herramientas y estructuras adecuadas. Para abordar un problema de manera eficiente, es fundamental descomponerlo en partes más pequeñas y clasificarlas según su naturaleza.

A continuación, se presentan algunos enfoques comunes para diferentes tipos de problemas:

### Búsqueda en Arrays

>[!TIP]
Si el problema consiste en encontrar un elemento dentro de una lista o array, se pueden emplear los siguientes métodos:

```javascript
// Búsqueda lineal en un array
function buscarElemento(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return `Elemento encontrado en la posición ${i}`;
        }
    }
    return "Elemento no encontrado";
}
```

En caso de que el array esté ordenado, la **búsqueda binaria** puede ser una opción más eficiente.

### Evaluación de Condiciones

>[!TIP]
Cuando la solución depende de condiciones específicas, se utilizan estructuras condicionales:

```javascript
// Verificar si un número es positivo, negativo o cero
function verificarNumero(num) {
    if (num > 0) {
        return "El número es positivo";
    } else if (num < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}
```

### Repetición de Operaciones

>[!TIP]
Si es necesario repetir una acción hasta cumplir una condición específica, se emplean bucles:

```javascript
// Imprimir números del 1 al 5 usando un bucle while
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

### Ordenamiento de Datos

>[!TIP]
Si se requiere organizar datos, se pueden usar algoritmos de ordenamiento como **Bubble Sort**, **QuickSort** o **MergeSort**.

```javascript
// Ordenamiento por burbuja
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```

## Desarrollo de una Mentalidad Estructurada

Para mejorar en programación, es útil desarrollar una especie de **tabla mental** o marco de referencia para identificar qué tipo de problema se está enfrentando y qué método es el más adecuado para resolverlo. Esto agiliza el desarrollo y mejora la eficiencia del código.

## Contacto

- **Nombre**: Mateo Laureano Acierno
- **Correo**: malaucierno@gmail.com
- **LinkedIn**: [Mateo Acierno](https://www.linkedin.com/in/mateo-acierno/)