let nombre = 'Angel';

function imprimirNombreMayusculas () {
    nombre = nombre.toUpperCase ()
    console.log (nombre)
};
imprimirNombreMayusculas();

function imprimirNombreEnMinusculas(n) {
    n = n.toLowerCase()
    console.log(n)
}

imprimirNombreEnMinusculas(nombre)