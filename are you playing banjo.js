//create a function that if you have an R o r in your name it will return "play banjo" if not it will return "are you playing banjo?"
//crea una funcion que si tienes un R o r en tu nombre te devolvera "play banjo" si no te devolvera "are you playing banjo?"S



function areYouPlayingBanjo(name) {
    if (name[0] === "R" || name[0] === "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}

console.log(areYouPlayingBanjo("rikke"));



