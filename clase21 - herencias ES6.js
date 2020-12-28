class Persona{
    constructor(nombre, apellido, estatura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.estatura = estatura;
    }

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y mi estatura es de ${this.estatura} m.`);
    }

    soyAlto(){
        return  this.estatura >  1.8;
    }
}

class Desarrollador extends Persona{

    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.estatura} m y soy desarrollador.`);
    }

}
/*
let persona = new Persona('Angel','Mazur','1.70'); // Aquí soy persona
let desarrollador = new Desarrollador('Enrique','Nieto',1.81);

persona.saludar();
desarrollador.saludar();
*/

//Cuando se quiere heredar todos los atributos de un prototipo, en este caso persona, simplemente puedo "extender" hacia otro objeto.Ej: class Desarrollador extends Persona {} y este automaticamente copia los atributos que tiene el objeto 1  "persona"

class SuperDotado extends Desarrollador{
    constructor(nombre, genio){

    super(nombre);

    this.nombreSuperDotado = nombre;//Esto es un atributo heredado que guardo en un atributo nuevo
    this.genio = genio;//Esto es un atributo nuevo
    };
    saludar(){
        console.log(`Hola mi nombre es ${this.nombreSuperDotado} tengo un ${this.genio}.`);
    }
}
let persona = new Persona('Angel','Mazur','1.70');
let desarrollador = new Desarrollador('Enrique','Nieto',1.81);
let superdotado = new SuperDotado('Angel', 'Ci 190');

persona.saludar();
desarrollador.saludar();
superdotado.saludar();

//Sin embargo cuando no solo quiero copiar atributos si no modificarlos tengo que hacerlo con "constructor" y llamarlos con "super" Ej: "nombre" y ademas en el código de arriba, modifico un atributo que heredo de "desarrolador" y creo uno nuevo Ej: "genio"