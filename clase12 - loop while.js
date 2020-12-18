let angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 30,
    peso: 70
}
console.log(`Al inicio del año ${angel.nombre} pesa ${angel.peso}kg`);

const VARIABLE_PESO = 0.3; //gramos de peso
const DIAS_DEL_ANO = 365;
const aumentarPeso = persona => persona.peso += VARIABLE_PESO;

//arrow function en el cual llamo al key del objeto (angel) y le sumo la constante "VARIABLE_PESO"
const perderPeso = persona => persona.peso -= VARIABLE_PESO;

//arrow function en el cual llamo al key del objeto (angel) y le resto la constante "VARIABLE_PESO"
const META  = angel.peso - 3;//puedo ponerlo así o directamente 67

const comeMucho = () => Math.random() < 0.3;
//arrow function que llama a un numero random
const haceDeporte = () => Math.random() < 0.4;

let dias = 0;
//Comienza en 0 y el código se ejecutara  e incrementaremos en 1 la cantidad de días

while (angel.peso > META){
    //el código que esta entre llaves se va a repetir siempre que la condición que este entre parentesis sea true
    if(comeMucho()){
        //aumentarDePeso
        aumentarPeso(angel)
    }
    if(haceDeporte()){
        //perderPeso
        perderPeso(angel)
    }
    dias += 1 //incremento de 1 cuando el código sea true
};
//Mientras que la condición sea verdadera el ciclo se va a repetir e irá aumentando los días, cuando de false se ejecutara el resto del código
console.log(`Pasan ${dias} días hasta que ${angel.nombre} pierde 3 kg`)

