const signo = prompt('¿Cual es tu signo?');
//PROMPT = Función que pregunta al usuario y le pide datos


const horoscopos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
}; // Objeto que guarda los horoscopos, se imprimen los horoscopos no importando como se escriba May/Min


//En el caso que tengas una función que se repita con distintos casos EJ
// function calcularSigno(signo){
//     if (signo === horoscopos.aries){
//         console.log('aries')
//     }
//     if (signo === horoscopos.tauro){
//         console.log('tauro')
//     }
//     if (signo === horoscopos.geminis){
//         console.log('geminis')
//     }
// }

// Evalua el signo y regresa el horóscopo
const calcularSigno = function(signo){
    switch(signo.toLowerCase()){ //switch funciona de la siguiente manera:  switch (){cada uno de los casos}
        case 'aries'://se escribe "case" la respuesta a signo que queramos ":" y lo que deba ejecutar
            console.log(horoscopos.aries);
            break;// se ejecuta el código hasta que se encuentre un "break"
        case 'tauro':
            console.log(horoscopos.tauro);
            break;
        case 'geminis':
        case 'géminis':
            console.log(horoscopos.geminis);
            break;
        case 'cancer':
        case 'cáncer':
            console.log(horoscopos.cancer);
            break;
        case 'leo':
            console.log(horoscopos.leo);
            break;
        case 'virgo':
            console.log(horoscopos.virgo);
            break;
        case 'libra':
            console.log(horoscopos.libra);
            break;
        case 'escorpion':
        case 'escorpión':
            console.log(horoscopos.escorpion);
            break;
        case 'sagitario':
            console.log(horoscopos.sagitario);
            break;
        case 'capricornio':
            console.log(horoscopos.capricornio);
            break;
        case 'acuario':
            console.log(horoscopos.acuario);
            break;
        case 'piscis':
            console.log(horoscopos.piscis);
            break;
        default: // Si no se encuentra niguna respuesta predefinida, escribiendo "default" ejecutara el siguiente código
            console.log('Ese signo no existe');
            break;
    }
};

calcularSigno (signo); //llamamos a la función