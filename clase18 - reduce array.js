let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
};

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
};

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
};

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
};

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
};

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
};

let acum = 0;
let personas = [sacha, alan, martin, dario, vicky, paula];

for (let i=0; i < personas.length; i++ ){
    acum = acum + personas[i].cantidadDeLibros;
};//esta es la manera de contar la cantidad de libros con el ciclo for.

function cantidadDeLibrosAcum(acum, val){
    return acum + val.cantidadDeLibros;
}; //esta función es valida pero se puede reducir

let resultado = personas.reduce(cantidadDeLibrosAcum, acum);//necesita dos parámetros el método reduce: la función con la que va operar y una cantidad inicial

//-------------código reducido-----------------
const cantidadDeLibrosAcum = (acum, {cantidadDeLibros})=> acum + cantidadDeLibros;

let resultado = personas.reduce(cantidadDeLibrosAcum, acum)

console.log (`Cantidad del libros ${resultado}`);