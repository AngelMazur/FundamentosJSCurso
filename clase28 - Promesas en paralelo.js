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

let ids = [1, 2, 3, 4, 5, 6, 7];
let promesas = ids.map ((id) => obtenerPersonaje(id));//con ".map" se recorre cada uno de  sus elementos al cual le pasamos una función anónima para llamar  al "obtnerPersonaje" y su parámetro "id"

Promise
    .all(promesas)
    .then(data => {
        data.forEach((data)=>{//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
        console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
        })
    })
    .catch(error => console.log(error))