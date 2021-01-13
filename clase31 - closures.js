function crearSaludo(finalDeFrase) {
  debugger//Creo debugger para entender como funciona la función
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalDeFrase}`)
  }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Pablo')
saludoMexicano('Pablo')
saludoColombiano('Pablo')
/*Funcionamiento del código:
Se crea una función "crearSaludo" con un parámetro y retorna otra función anónima anidada dentro con otro parámetro.
-Se declara una constante con la función "crearSaludo" y un parámetro(), a la cual se le llama pasandole otro parámetro "EL CLOSURE"
 */


/*Closure: Es una función o un objeto con funciones que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones.
 */