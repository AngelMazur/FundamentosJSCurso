/**
 * Las funciones son pedazos de codigo
 * reutilizables
 *
 * Para declarar una funcion se emplea la
 * palabra reservada function
 *
 * function nombreFuncion (parametros)
 * {
 *    cuerpo de la funcion, cod reutilizable
 * }
 */
let nombre = 'Sacha', edad = 28

function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} años`)
}

//Si una función la creamos con parametros Pero no se los enviamos, no va a salir error. Intentará imprimir pero pondrá undefined en losparametros que no ingresemos. Esto debido a que js es debilmente tipado.
imprimirEdad(nombre, edad)

imprimirEdad('Vicky', 28)
imprimirEdad('Eric', 24)
imprimirEdad('Darío', 27)
imprimirEdad(25, 'Carlos')
imprimirEdad('Juan')
