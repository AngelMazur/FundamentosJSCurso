class Persona{
    constructor(nombre, apellido, estatura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
    }

    saludar(fn){//Si existe una función entonces es true y por ende la realiza
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y mi estatura es de ${this.estatura} m.`);
        if (fn){//se le agrega un if que dispare la llamada si esque existe
            fn (this.nombre, this.apellido);
        };
    };

    soyAlto(){
        return  this.estatura >  1.8;
    };
};

class Desarrollador extends Persona{

    saludar(fn){//Si existe una función entonces es true y por ende la realiza
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura} m y soy desarrollador.`);
        if (fn){//se le agrega un if que dispare la llamada
            fn (this.nombre, this.apellido, true);
        };
    };
};

function responderSaludo(nombre, apellido,esDev) {
    console.log (`Buenos dias ${nombre} ${apellido}`);
    if  (esDev){
        console.log ('Eres desarrollador no lo sabia');
    }
};
//Esta es la función que se le va a pasar como parámetro al método saludar
let persona = new Persona('Angel','Mazur','1.70');
let desarrollador = new Desarrollador('Enrique','Nieto',1.81);


persona.saludar(responderSaludo);
desarrollador.saludar(responderSaludo);
