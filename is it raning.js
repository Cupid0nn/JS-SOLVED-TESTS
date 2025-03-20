//write a function that takes days some days will rain some days no, if the input its sunday will rain for example.

function ItsRaining(string){
    if (string=="lunes"){
        return "is not raining on this " + string
    }
    else if (string=="Martes"){
        return "is raining on this " + string
    }
    else if (string=="Mierdcoles"){
        return "is not raining on this " + string
    }
    else if (string=="Jueves"){
        return "is raining on this " + string
    }
    else if (string=="Viernes"){
    return "is not raining on this " + string
    }
    else if (string=="Sabado"){
        return "is raining on this " + string
    }
    else if (string=="Domingo"){
        return "is not raining on this " + string
    }
    else return "thats not a day of the week, or not have Uppercase"

}

console.log(ItsRaining("Martes"))