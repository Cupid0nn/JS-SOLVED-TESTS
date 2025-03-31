//build a function that takes in tow argumentes (salary, bonus) Salary will be an integer, and bonus a boolean.

//if bonus is true, the salary should be multiplied by 10, if bonus is false, just return the salary

//return the total figure the individual will recivie as a strin prefixe whit "\u00A3" symbol which is the unicode for the pound sign 

function BonusTime(salary,bonus){
    if (bonus == true) {
        return "£" + salary * 10
    }else{
        return "£" + salary
    }
}

console.log(BonusTime(500,false))//'£500'
console.log(BonusTime(500,true))//''£5000'