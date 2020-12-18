let angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 30,
    peso: 70
}
console.log(`Al inicio del año ${angel.nombre} pesa ${angel.peso}kg`)

const VARIABLE_PESO = 0.2 //gramos de peso
const DIAS_DEL_ANO = 365
const aumentarPeso = persona => persona.peso += VARIABLE_PESO
//arrow function en el cual llamo al key del objeto (angel) y le sumo la constante "VARIABLE_PESO"
const perderPeso = persona => persona.peso -= VARIABLE_PESO
//arrow function en el cual llamo al key del objeto (angel) y le resto la constante "VARIABLE_PESO"
for (let i = 1; i <= DIAS_DEL_ANO; i++){
    //entre los parentesis va a tener 3 partes, la parte inicial, la condición y la parte del incremento
    //entre las llaves va ir el código que queremos que se repita
    let random = Math.random()
    //declaración del numero random que va a estar entre 0... 1
    if (random < 0.25){
    //aumentoDePeso el 25% del año
    aumentarPeso(angel)
    }else if (random < 0.5){
    //adelgazar el 25% del año
    perderPeso(angel)
    }
}
//En el caso que  el numero random de entre 0 y 0.25 se cumple la primera condición de lo contrario si da entre 0.26 y 0.5 se cumple la segunda condición. Si da mas de 0.5 no ocurre nada
console.log(`Al final del año ${angel.nombre} pesa ${angel.peso.toFixed(1)}kg`)