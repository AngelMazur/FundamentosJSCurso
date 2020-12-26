// La herencia en ES5 era de locos, por tal motivo ES6 trae consigo un wrapper para trabajar orientado a objetos como en otros lenguajes de programación...
// Ejemplo de herencia prototipal en ES5


// Declaración de la clase padre
function Persona(nombre, apellidos, altura) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellidos}`)
}

Persona.prototype.consultarAltura = function()  {
    console.log(`${this.nombre} tiene una estatura de ${this.altura} mts.`)
}



// Declaración de la clase hija
function Desarrollador(nombre, apellidos, altura, lenguajes) {
    // 3. El constructor crea una nueva propiedad llamada super para este objeto, y le asigna como valor el constructor de la clase de la cual se quiere extender, Persona.
    this.super = Persona
    // 4. La declaración anterior convierte el atributo super, en un metodo (vinculo) para invocar al constructor de la clase padre y pasarle todos los parametros que necesita para ser inicializado. La palabra super es solo por convención
    // Durante todo este proceso, this hace referencia a este objeto....
    this.super(nombre, apellidos, altura)
    this.lenguajes = lenguajes
}

// 5. Indicamos que el prototipo base para Desarrollador, es el prototipo Persona (es decir, indicamos de quien extiende o hereda)
Desarrollador.prototype = new Persona

// Sobre-escribir metodos del prototipo padre
Desarrollador.prototype.saludar = function() {
    console.warn(`Desarrollador ${this.nombre} ${this.apellidos}`)
}
// Añadir los metodos propios de la clase hija
Desarrollador.prototype.mostrarLenguajes = function() {
    console.log(`${this.nombre} domina las siguientes tecnologías: ${this.lenguajes.join(', ')}`)
}



var genaro = new Persona('Genaro', 'Tlacoyo Fuentes', 1.89)

// 1. El operador new creará un objeto generico y le asignara a la propiedad _proto el valor de Desarrollador.prototype
// 2. El operador new pasará el nuevo objeto creado al constructor de Desarrollador, como valor de la palabra reservada this. (este objeto)
var alejandro = new Desarrollador('Alejandro', 'González Reyes', 1.72, ['php','css','html','js','mysql','laravel','vuejs'])

console.log(genaro)
console.log(alejandro)

genaro.saludar()
alejandro.saludar()

genaro.consultarAltura()
alejandro.consultarAltura()

alejandro.mostrarLenguajes()


/**
 * Apuntes finales.
 *
 * La búsqueda de propiedades en JavaScript comienza en las propias propiedades del objeto, y si este nombre de propiedad no se encuentra, consulta las propiedades del objeto especial __proto__. Este proceso se realiza de manera recursiva.
 *
 * La propiedad especial __proto__ se define cuando un objeto es construido: su valor corresponde con la propiedad prototype del constructor. Así, la expresión new Foo() crea un objeto con la propiedad __proto__ == Foo.prototype. En consecuencia, los cambios producidos en Foo.prototype alteran la búsqueda de propiedades de todos los objetos creados con new Foo().
 *
 * Todo objeto tiene una propiedad __proto__, así como una propiedad prototype. Por lo tanto, los objetos pueden relacionarse a través de esta propiedad.
 *
 * genaro._proto_ = Desarrollador.prototype;
 * genaro._proto_._proto_ = Persona.prototype;
 * genaro._proto_._proto_._proto_ = Object.prototype;
 * genaro._proto_._proto_._proto_._proto_ = null;
 */