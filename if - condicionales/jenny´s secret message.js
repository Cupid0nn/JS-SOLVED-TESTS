// jenny has written a function that returns a greetins for a user, however she´s in love with another user, she wants to greet her lover differently. She added a special case to her function, but she made a mistake.
//jenny hizo una funcion que devuelve un saludo al usuario, pero ella quiere esconder un mensaje secreto para su amor.

// el codigo dado es este:
function greet(name){
    return `Hello, ${name}!`;
    if (name === 'mateo') {
        return "Hello, my love!";
    }
}

//cual es el problema?, el problema es que el return corta el ciclo de la funcion por ende el condicional no se ejecuta.

// esta seria una forma de resolverlo:

function Greetings(name){
    if (name === 'mateo') { 
        return "Hello, my love!";
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(Greetings('mateo')); // 'Hello, my love!'
console.log(Greetings('jenny')); // 'Hello, jenny!'
console.log(greet('jenny')); // 'Hello, jenny!'
console.log(greet('mateo')); // 'Hello, mateo!'

