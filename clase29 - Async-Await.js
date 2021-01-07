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
function onError(id) {
console.log(`Error con la id ${id}`)
}

async function obtenerPersonajes() {
    //para poder utilizar await hay que utilizar "async"
    let ids = [1, 2, 3, 4, 5, 6, 7];
    let promesas = ids.map ((id) => obtenerPersonaje(id));

    try{//con "try le asignamos el valor de una tarea asíncrona"
    let personajes = await Promise.all(promesas);
    //Cuando todas las promesas se resuelvan, guardalo en la variable personajes
    //tenemos que utilizar await y su funcionamiento es el siguiente. Detiene la ejecución y en el momento en el que se resuelvan todas las promesas se las pasa a la variable.
    console.table(personajes);
    }catch(id){
        onError(id)
    }
};

async function getCharacterPersons() {
    let ids = [1, 2, 3, 4, 5, 6, 7,];
    let promesas = ids.map ((id) => obtenerPersonaje(id));

    try{
        let data = await Promise.all(promesas)
        data.forEach ((data)=> console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`))
    }catch(id){
        onError(id)
    }
};
obtenerPersonajes();
getCharacterPersons();
