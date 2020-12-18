let contador = 0;
let llover = () => Math.random() < 0.25;
//elegir número de veces que va llover (menor que el 25%)
do {
    //el contador aumentara mientras la condición se cumpla
    contador++;
} while (!llover ());
    //esta es la condición de que mientras que no llueva el contador no aumentara.
let frecuencia = contador === 1 ? 'vez' : 'veces';
// sentencia que marca si llueve una sola vez ponga el string el singularx
console.log (`Fuí a ver si llovía ${contador} ${frecuencia}`);