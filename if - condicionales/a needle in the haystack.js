// write a function findNeedle() that takes an array full of junk but containing one "needle", then return a string whit the position of the needle in the array., like 'findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) should return 'found the needle at position 5'
// escribre una funcion que se llame findNeedle() que busque en un array el string "needle", y devuelva en un string su posicion dentro del mismo

//pasos:
// creamos la funcion
// creamos un for que recorra el array
// creamos un if que verifique si el array en la posicion i es igual a needle
// creamos un return

// o usamos la funcion indexOf con un ${x.indexOf('needle')} siendo x la variable y ('') lo que buscamos

function findNeedle(array){
    return `found the needle at position ${array.indexOf('needle')}`
}

function FindNeedle (arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'needle'){
            return `found the needle at position ${i}`;
        }
    }
}

// usuariamos el segundo en caso de que necesitemos añadir mas tareas algo como mas condicionales etc.

