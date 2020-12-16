const nombreAng = 'Angel';
const nombreAnd = 'Andres';

function imprimirNombreMayusculas (nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
};
imprimirNombreMayusculas(nombreAnd);
imprimirNombreMayusculas(nombreAng);

//------------OBJETOS----------
const Angel = {
    nombre : 'Angel', //las propiedades del objeto se les llama "keys" y valores son "values"
    apellido: 'Mazur',
    edad: 30,
    altura: 1.70
};
const Andres = {
    nombre : 'Andres',
    apellido: 'Saa',
    edad: 30,
    altura: 1.68
};
function imprimirNombreEnMayusculas1 ({apellido}) {//Hay que poner llaves dentro de los atributos de la función para que valla a tu objeto
    console.log(apellido.toUpperCase())
};
imprimirNombreEnMayusculas1(Angel);
imprimirNombreEnMayusculas1(Andres);
imprimirNombreEnMayusculas1({apellido: 'Ramos'});//podemos añadir key a la función de esta manera.

//--------------MAS EJEMPLOS CON OBJETOS--------------
function suma({n1,n2}){
	let operacion = n1 + n2
	console.log(operacion)
}

let miSuma = {
	n1: 5,
	n2: 10
}

suma(miSuma) // Salida ->15
suma({n1:100, n2: 100 + 50}) // Salida -> 250
suma({n1: 100 - 1, n2: (200 * 2) + 1  }) // Salida -> 500

//----------------DESESCTRUCTURAR OBJETOS--------------
function imprimirNombreMayusculas2 (persona){
    // let nombre = persona.nombre;
    let {nombre} = persona;//Esto es igual a let nombre = persona.nombre
    console.log(nombre.toUpperCase())
}
imprimirNombreMayusculas2(Angel);

//-----------------reto------------
function imprimirNombreEdad ({nombre, edad}){
    console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
};

imprimirNombreEdad(Angel);
imprimirNombreEdad(Andres);

function imprimirNombreEdad1 ({nombre, edad}){
    console.log(nombre, edad)
};

imprimirNombreEdad1(Angel);
imprimirNombreEdad1(Andres);

function imprimirNombreEdad3 (persona){
    let {nombre, edad} = persona
    console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
};
imprimirNombreEdad3 (Angel)

/****
 * JavaScript se comporta diferente con los objetos.
 * Cuando una función recibe un objeto como parámetro,
 * se pasan por referencia, esto quiere decir que
 * si los modificamos dentro del cuerpo de una función
 * su valor se va a ver modificado fuera de la misma.
 */

 function cumpleanos (persona){
     console.log(persona.edad += 1)
 };
 cumpleanos (Andres);//Este objeto se va a ver modificado cada vez que llamemos a la función. Es decir que se ira sumando uno cada vez que se ejecute porque estamos pasando un objeto como parámetro "persona.edad" --> ese ".edad" es el mencionado parámtro.

//SI QUEREMOS QUE ESTO NO SUCEDA
function cumpleanos1 (persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
};

