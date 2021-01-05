const API = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'
const options = {crossDomain: true}; //Hacia donde apunta

function obtenerPersonaje (id) {
    return new Promise((resolve, reject) => {
        const url = `${API}${PEOPLE.replace(':id', id)}`;
        $.get (url, options, (onData) =>{
         resolve(onData)
        }).fail(()=> reject(id))
    })//Esta es la asincronía que la reflejamos con una promesa
}
obtenerPersonaje(1)
.then( data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    return obtenerPersonaje(2)
    })
.then( data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    return obtenerPersonaje(3)
    })
.then( data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    return obtenerPersonaje(4)
    })
.then( data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    return obtenerPersonaje(5)
    })
.then( data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    return obtenerPersonaje(6)
    })
.then( data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    return obtenerPersonaje(7)
    })
.then (data => {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
})
.catch(() => console.log(`Sucedió un error inesperado, no se pudo obtener personaje ${id}`));
