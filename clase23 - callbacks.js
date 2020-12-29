const API = 'https://swapi.dev/api/'
const PEOPLE = 'people/:id'

const persona = `${API}${PEOPLE.replace(':id', 1)}`;// .replace sirve para remplazar una parte del string por otro.
const options = {crossDomain: true}; //Hacia donde apunta

const onResponse = function (data) {
    console.log (arguments)//con esto se ve los parámetros que trae la API
    console.log(`Hola yo soy ${data.name}, mido ${data.height} mts y peso ${data.mass} kg`) //llamo a varios atributos del primer parámetro de la API
}

$.get (persona, options, onResponse);
//$.get acepta varios parámetros en este caso el primero es: la URL de la API completa y el segundo es indicarle a donde quiero que apunte y lo hacemos con ","

//por último le pasamos una función anónima la cual he declarado como "onResponse" para pasar los parámetros de la API