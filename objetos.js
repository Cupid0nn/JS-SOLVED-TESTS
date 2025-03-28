//los objetos de js son una coleccion de pares clave-valor, donde la clave es un string y el valor es cualquier cosa que se pueda guardar en js

const person = {
    name: 'John',
    age: 30
}


//las funciones que tiene los objetos son: keys(), values(), entries(), has(), get(), set(), delete()
//y se puede usar asi: 

const keys = Object.keys(person); // devuelve un array

const values = Object.values(person); // devuelve un array

const entries = Object.entries(person); // devuelve un array de arrays

const has = Object.hasOwn(person, 'name'); //verificamos si la propiedad name existe

const get = Object.getOwnPropertyDescriptor(person, 'name'); // obtenemos la propiedad name

const set = Object.defineProperty(person, 'name', { value: 'Jane' });//modificamos el valor de la propiedad name

// const delete = Object.defineProperty(person, 'name', { value: 'jhon' });//eliminamos la propiedad name
