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

// const pasarAlturaCms = persona =>{
//         return persona.altura *= 100;
//     } // esta arrow function  me devuelve los cm de las personas

const pasarAlturaCms = persona =>{
    persona.altura *= 100;
    return persona;
} // esta arrow function  me devuelve los objetos modificados

const pasarAlturaCms = persona =>{
    return { //la desglosamos en un nuevo objeto y lo ponemos en return porque es lo que queremos que nos devuelva
        ...persona,//OBJETO NUEVO
        altura: persona.altura *= 100
    }
};
let personas = [sacha, alan, martin, dario, vicky, paula];

let personasCms = personas.map(pasarAlturaCms);
//. El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.

console.log(personasCms);

//---------código abreviado--------------

const pasarAlturaCms = persona =>({//con paréntesis especificas que lo que estas devolviendo es una array.
    ...persona,
    altura: persona.altura * 100
})

let personas = [sacha, alan, martin, dario, vicky, paula];

let personasCms = personas.map(pasarAlturaCms);


console.log(personasCms);