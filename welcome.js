//write an functio that welcome people in her idiome
//escribe una funcion que salude a las personas en su idioma

const idiomas = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
}

function Greetings(lenguaje){
    if (idiomas[lenguaje]) {
        return idiomas[lenguaje] // le pasamos el lenguaje a la funcion y con eso podemos acceder al objeto y devolver el valor
    } else {
        return idiomas['english'] // si no se encuentra el lenguaje, devolvemos el lenguaje ingles por default
    }
}

console.log(Greetings(''))



//FULL CONSIGNE 🔽

//you start-up´s BA has told marketing that your website has a large auduicne in scandinavia and surroinding countries. They would like to welcome visitors to the site in their own language.
//your task is to return a greeting that is formatted appropriately for the different languages.
