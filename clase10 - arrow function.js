let Angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 28,
    electronico: true,
    estudiante: true,
    piloto:false,
    astronauta: false
}
let Melisa = {
    nombre: 'Melisa',
    edad: 2
}
function imprimirSiEsMayorDeEdad (persona){
    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(Angel);
imprimirSiEsMayorDeEdad(Melisa);

//-------------OTRA MANERA DE HACER LA MISMA FUNCIÓN-----------------

let Angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 28
}
let Melisa = {
    nombre: 'Melisa',
    edad: 2
}
const mayoriaDeEdad = 18;

function siEsMayorDeEdad(persona){
    return persona.edad >= mayoriaDeEdad
}
function imprimirSiEsMayorDeEdad (persona){
    if (siEsMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
};
imprimirSiEsMayorDeEdad(Angel);
imprimirSiEsMayorDeEdad(Melisa);

//-----------HACER LA MISMA FUNCIÓN CON ARROW FUNCTION---------------
let Angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 28
}
let Melisa = {
    nombre: 'Melisa',
    edad: 2
}
const mayoriaDeEdad = 18;

// function siEsMayorDeEdad(persona){
//     return persona.edad >= mayoriaDeEdad
// }
const siEsMayorDeEdad = ({edad}) => edad >= mayoriaDeEdad;
//como vi en la clasde de objetos, puedo llamar al key del mismo con ({key}) y despues hacemnos la comparación

function imprimirSiEsMayorDeEdad (persona){
    if (siEsMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
};
function permirtirAcceso (persona){
    if(!siEsMayorDeEdad(persona)){
        console.log(`${persona.nombre} ACCESO DENEGADO`)
    }
}
imprimirSiEsMayorDeEdad(Angel);
imprimirSiEsMayorDeEdad(Melisa);
permirtirAcceso(Melisa);

//-------------------RETO-----------------------

let Angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 28
}
let Melisa = {
    nombre: 'Melisa',
    edad: 2
}
const mayoriaDeEdad = 18;
const siEsMayorDeEdad = ({edad}) => edad >= mayoriaDeEdad;
const esMenorDeEdad = persona => !siEsMayorDeEdad(persona) ? console.log('Soy menor') : console.log('Soy mayor');

esMenorDeEdad(Melisa);
esMenorDeEdad(Angel);
//---------------------OTRO EJEMPLO--------------------
let Angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 28,
    electronico: true,
    estudiante: true,
    piloto:false,
    astronauta: false
};
const imprimirProfesiones = ({ingeniero}) => ingeniero ? console.log(`${persona.nombre}`) : console.log('no soy ingeniero');
//Con operadores ternarios establecemos una condicion " si la persona(objeto) es iingeniero" nos devuelve el nombre con "?" y si no lo es  con ":" nos devuelve false

imprimirProfesiones (Angel);