function firstNonConsecutive (arr) {
    for (let i = 1 ; i < arr.length ; i++){
        if (arr[i] - 1 !== arr[i - 1]) return arr[i];
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3, 4, 5 ,7, 8]))

function get(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1] - 1) {
        return array[i + 1] ;
      }
    }
    return null;
  }
  console.log(get([1, 2,3, 4, 5 ,7, 8]));