// take an array and remove every second elemnt from the array, always keep first element and start removing with the next element
// toma un array y elimina cada segundo elemento del array, siempre mantiene el primer elemento y empieza a eliminar con el siguiente elemento
//pasos: 
// 1. creamos la funcion
// 2. creamos la variable
// 3. creamos un for que recorra el array
// 4. creamos un if que verifique si el array en la posicion i es igual a 0
// 5. creamos un return
function RemoveElement(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if ( i % 2 === 0){
      newArr.push(arr[i]);
    }
    }
    return newArr
}
console.log(RemoveElement(["var1","var2","var3" ,"var4","adcauhw" ]));//[ 'var1', 'var3', 'adcauhw' ]
