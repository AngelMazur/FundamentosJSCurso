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
function imprimirSiEsMayorDeEdad (persona){//Perosna es un parámetro que creo yo
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
