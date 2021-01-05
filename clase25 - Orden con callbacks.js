const API = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'
const options = {crossDomain: true}; //Hacia donde apunta


function obtenerPersonaje(id, callbacks) {//Función para obtener múltiples request y devolverlos como callbacks
    const url = `${API}${PEOPLE.replace(':id', id)}`; //.replace sirve para remplazar una parte del string por otro.
    $.get (url, options, callbacks)//
    .fail(()=> console.log(`Sucedió un error inesperado, no se pudo obtener personaje ${id}`));
    //Implemento el manejo de errores con el método .fail()
}
obtenerPersonaje(1, function (data) {
    console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
    obtenerPersonaje(2, function (data) {
         console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
        obtenerPersonaje(3, function (data) {
             console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
            obtenerPersonaje(4, function (data) {
                 console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
                obtenerPersonaje(5, function (data) {
                     console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
                    obtenerPersonaje(6, function (data) {
                         console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
                        obtenerPersonaje(7, function (data) {
                            console.log(`Hola yo soy ${data.name}, mido ${data.height} cmts y peso ${data.mass} kg`)
                        })
                    })
                })
            })
        })
    })
});
//Para llamar a los callbacks en orden lo que tengo que hacer es la función a la cual llamaba "onResponse" y se la pasaba como parámetro a "$.get" la llamo en cada uno de los llamados de "obtenerPersonaje", con lo cual al ".get" le paso un tercer parámetro al cuál he llamado "callack".
//Llamo a los callbacks pero eso produce un callback hell el cuál es una mala práctica y tiene que ser evitado.

//-------------OTRO EJEMPLO DE LLAMADA A CALLBACKS-----------

const asincronia = (list, callback) => {
    //se valida que el parametro list sea un arreglo
    //y no este vacio
    if (list instanceof Array && list.length > 0) {
        let suma = list.map(valor => Math.pow(valor, 2));//Math.pow se le pasan los valores de base y exponente
        return callback(null, suma);
    }
    //si no se cumple la condicion se manda un error.
    else {
        let error = new Error("Error de ejecución . . . :( ");
        return callback(error, null);
    }
};
//========== Consiguiendo la respuesta correcta ==========//
asincronia([2, 3, 4, 5], (error, result) => (error) ? console.error(error) : console.log(result));

//========== Consiguiendo el error ==========//
//asincronia([], (error, result) => (error) ? console.error(error) : console.log(result));