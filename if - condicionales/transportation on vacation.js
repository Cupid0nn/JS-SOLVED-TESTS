//you rent a car for a day an cost you 40$ if you rent the car for 7 days it will cost you 50$ off your total. alternatively if you rent the car for 3 or morde dats, you fet 20$off your total.
//write a code that gives out the total amount for differents days (d)

//pasos:
//creamos la funcion
//creamos un if que verifique si d es igual a 7
//creamos un if que verifique si d es igual a 3 o mas
//creamos un return

function rentalCarCost(d) {
  let price = 40 * d;
  if (d < 3) {
    return price;
  }
  if (d >= 7) {
    return price - 50;
  } else {
    return price - 20;
  }
}

console.log(rentalCarCost(3)); //100
console.log(rentalCarCost(7)); //230
console.log(rentalCarCost(10)); //350
console.log(rentalCarCost(1)); //40
