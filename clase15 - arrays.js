const sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
}

const alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
}

const martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
}

const dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
}

const vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
}

const paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
}
//Creamos unos arrays que son una colección de datos o valores asiganos a una variable y las cuales podemos modificar.

// Para indicar que algo es un array utilizamos el símbolo "[ ]"
// var personas = []

// Dentro de los corchetes introducimos las variables que deseamos que contenga nuestro array, las variables pueden ser:
// - Números
// - Strings
// - Objetos
// - Funciones

// Incluso podemos mezclar diferentes tipos de datos.

// Si queremos acceder al 1er elemento de un array , escribimos el nombre del array seguido de los corchetes y el índice 0:

// personas[0]

// Si queremos acceder a los atributos de alguno de los elementos después del índice del elemento se agrega un “.” seguido del atributo:

// personas[0].altura

// Otra forma de acceder a los atributos es utilizando corchetes y el atributo pasarlo como un string:
// personas[0][‘altura’]

// Se debe tomar en cuenta que estamos utilizando objetos, no colecciones, pero podemos acceder a los atributos.

const personas = [sacha, alan, martin, dario, vicky, paula]

for (let i = 0; i < personas.length; i++) {
  //length es una propiedad de los string que indica cuandos datos tiene la cadena
  let persona = personas[i] // i de indice del array
  console.log(`${persona.nombre} mide ${persona.altura} metros`)
}
