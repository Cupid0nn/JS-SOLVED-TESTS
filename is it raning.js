//write a function that takes days some days will rain some days no, if the input its sunday will rain for example.

function ItsRaining(string){
    switch(string){
        case "Lunes":
            return "is not raining on this " + string
        case "Martes":
            return "is raining on this " + string
        case "Miercoles":
            return "is not raining on this " + string
        case "Jueves":
            return "is raining on this " + string
        case "Viernes":
            return "is not raining on this " + string
        case "Sabado":
            return "is raining on this " + string
        case "Domingo":
            return "is not raining on this " + string
        default:
            return "thats not a day of the week, or not have Uppercase"
    }
}

console.log(ItsRaining("Martes"))

// una forma mejorada para evitar el problema de los uppercase es esta: 

function itsRaining(day) {
    const rainyDays = new Set(["Martes", "Jueves", "Sábado"]); // hacemos un array con los dias lluviosos 
    
    // Normaliza la entrada para evitar errores de mayúsculas/minúsculas
    const formattedDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

    if (!["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].includes(formattedDay)) { // verificamos si la entrada es un dia de la semana
        return "That's not a valid day of the week."; // si no es un dia de la semana, retornamos un mensaje
    }

    return `It is ${rainyDays.has(formattedDay) ? "" : "not "}raining on this ${formattedDay}.`; // si el dia de la semana esta en el array de dias lluviosos, retornamos que esta lloviendo, si no, retornamos que no esta lloviendo
}
