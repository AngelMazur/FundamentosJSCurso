const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
};

const alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
};

const martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
};

const dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
};

const vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
};

const paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
};//OBJETOS


const esBaja = (persona)=>{//se le pasa un parámetro que en este caso es "persona"
    return persona.altura < 1.8;//se llama a la key del objeto en este caso ".altura" y le implementamos la condición que sea menor que 1.8.
};
// esta condición va a llevar cada uno de los objetos y va a iterar con ellos gracias a nuestra función ".filter"
let personas = [sacha, alan, martin, dario, vicky, paula];

let personasBajas = personas.filter(esBaja);// Para filtrar necesitamos 2 cosas una array y una condición. En este caso  la condicioón va a ser una función por ende la función ".filter" lleva una condición. Que en este caso es una función "esBaja".

console.log(personasBajas); //Llammamos a nuestra variable.

//--------------CÓDIGO SIMPLIFICADO----------

const esAlta = ({altura}) => altura > 1.8;
const esBaja = ({altura}) => !esAlta({altura}); //negamos la condición con un operador
// const esBaja = ({altura}) => altura < 1.8;
//como he visto en la clase de arrow function  puedo llamar a una key de esta manera.
let personas = [sacha, alan, martin, dario, vicky, paula];

let personasAltas = personas.filter(esAlta);
let personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);