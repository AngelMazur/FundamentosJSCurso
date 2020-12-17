    let x = 4
	let y = '4'

	x == y
    // true
    x === y //Siempre se utiliza la triple igualación para comparar
    // false

    //------------OBJETOS------------
    /*  Al comparar objetos JS tiene en cuenta también el nombre del objeto, por lo tanto se  remite a comparar el nombre de las variables a demás del valor de los atributos.
    Con objetos literales desglosados (otroMas en este caso), pasa lo mismo y la comparación da false ya que lo que se genera es un nuevo objeto a partir del desglosado.
    */
let sacha = {
    nombre: 'Sacha'
}
let otro = {
    nombre: 'Sacha'
}
let otroMas = {
    ...sacha
}

sacha == otro
// false

sacha === otro
// false

sacha == otroMas
// false

sacha === otroMas
// false

    /* Si asignamos el valor del objeto a una variable y los comparamos, el doble y el triple igual darán como resultado ‘true’ ya que en este caso las dos variables estarían refiriendo al mismo espacio en la memoria RAM.
    */

   let otroMasTodavia = sacha

	sacha == otroMasTodavia
	// True
	sacha === otroMasTodavia
    // True

    /*Otra cosa a tener en cuenta es que si cambiamos el valor del atributo en la variable, automáticamente cambia el valor del objeto también, por el mismo motivo que los operadores dan ‘true’, ambos refieren al mismo espacio en la memoria RAM.
    */
   otroMasTodavia.nombre = "Pepe"

   otroMasTodavia.nombre
   // "Pepe"

   sacha.nombre
   // "Pepe"
