let Angel = {
    nombre: 'Angel',
    apellido: 'Mazur',
    edad: 28,
    electronico: true,
    estudiante: true,
    piloto:false,
    astronauta: false
};
function imprimirProfesiones (persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.electronico){
        console.log ('igeniero')
    }else {
        console.log('No soy electronico')
    }
    if (persona.estudiante){
        console.log ('estudiante')
    }else {
        console.log('No soy estudiante')
    }
    if (persona.piloto){
        console.log ('piloto')
    }else {
        console.log('No soy piloto')
    }
    if (persona.astronauta){
        console.log ('astronauta')
    }else {
        console.log('No soy astronauta')
    }
};

//-------------------RETO-----------------

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
