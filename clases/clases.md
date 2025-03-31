# Clases en JavaScript

## Descripción

> [!IMPORTANT]
> Las clases en JavaScript son una forma de estructurar el código utilizando el paradigma de programación orientada a objetos (POO). Permiten definir plantillas para crear objetos con propiedades y métodos reutilizables.

## Definición de una Clase

Para declarar una clase en JavaScript, se utiliza la palabra clave `class` seguida del nombre de la clase. Dentro de la clase, se define un constructor y varios métodos.

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const persona1 = new Persona("Mateo", 19);
console.log(persona1.presentar());
```

## Métodos en Clases

> [!TIP]
> Los métodos son funciones definidas dentro de una clase y permiten manipular o acceder a los datos de los objetos creados con la clase.

### Métodos de Instancia

Estos métodos solo pueden ser utilizados por instancias de la clase.

```javascript
class Coche {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descripcion() {
        return `Este coche es un ${this.marca} ${this.modelo}.`;
    }
}

const miCoche = new Coche("Toyota", "Corolla");
console.log(miCoche.descripcion());
```

### Métodos Estáticos

> [!TIP]
> Los métodos estáticos pertenecen a la clase en sí y no a las instancias. Se definen con la palabra clave `static`.

```javascript
class Utilidades {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Utilidades.sumar(5, 10));
```

### Getters y Setters

> [!TIP]
> Los `getters` y `setters` permiten acceder y modificar propiedades de una manera controlada.

```javascript
class Usuario {
    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
}

const usuario = new Usuario("Carlos");
console.log(usuario.nombre); // Carlos
usuario.nombre = "Juan";
console.log(usuario.nombre); // Juan
```

## Herencia en Clases

> [!TIP]
> La herencia permite crear una nueva clase basada en otra, reutilizando sus propiedades y métodos.

```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        return "Haciendo un sonido genérico";
    }
}

class Perro extends Animal {
    hacerSonido() {
        return "Guau guau";
    }
}

const miPerro = new Perro("Rex");
console.log(miPerro.hacerSonido());
```

## Beneficios del Uso de Clases

- Facilitan la organización del código.
- Permiten la reutilización de código mediante la herencia.
- Mejoran la legibilidad y el mantenimiento del código.
- Implementan el paradigma de programación orientada a objetos en JavaScript.

## Contacto

- **Nombre**: Mateo Laureano Acierno
- **Correo**: [malaucierno@gmail.com](mailto\:malaucierno@gmail.com)
- **LinkedIn**: [Mateo Acierno](https://www.linkedin.com/in/mateo-acierno/)



