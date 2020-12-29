const API = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'
const options = {crossDomain: true}; //Hacia donde apunta
const onResponse = function (data) {
    console.log (arguments)//con esto se ve los parámetros que trae la API
    console.log(`Hola yo soy ${data.name}, mido ${data.height} mts y peso ${data.mass} kg`)
    //llamo a varios atributos del primer parámetro de la API
}

function obtenerPersonaje(id) {//Función para obtener múltiples request
    const url = `${API}${PEOPLE.replace(':id', id)}`; //.replace sirve para remplazar una parte del string por otro.
    $.get (url, options, onResponse);
}
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

/*OUTPUT:
"2" Hola yo soy C-3PO, mido 167 mts y peso 75 kg
"3" Hola yo soy R2-D2, mido 96 mts y peso 32 kg
"1" Hola yo soy Luke Skywalker, mido 172 mts y peso 77 kg

Con este ejemplo  se ve claramente el asincronismo de JS, cuando le pedimos una solicitud a la API y nos la devuelve de manera aleatoria dependiendo del servidor */