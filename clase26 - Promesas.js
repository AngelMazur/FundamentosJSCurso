const API = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'
const options = {crossDomain: true}; //Hacia donde apunta

function obtenerPersonaje (id) {
    return new Promise((resolve, reject) => {
        const url = `${API}${PEOPLE.replace(':id', id)}`;
        $.get (url, options, (onData) =>{
         resolve(onData)
        })
        .fail(()=> reject(id))
    })//Esta es la asincronía que la reflejamos con una promesa
    .then((data) => {
        console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    })//Si se resuelve de manera correcta la promesa invocara al ".then" y al data que tenga dentro de la función
    .catch(() => console.log(`Sucedió un error inesperado, no se pudo obtener personaje ${id}`));
    //De lo contrario si da un error llamara al ".catch" y la data que tenga dentro de la función
}
obtenerPersonaje(1)
