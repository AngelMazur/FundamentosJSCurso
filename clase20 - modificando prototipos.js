function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

persona.prototype.saludar = function () {
    console.log (`Hola me llamo ${this.nombre} ${this.apellido}`);
};//Para llamar a esta función tenemos que llamar al objeto con el atributo saludar ej: angel.saludar ();
persona.prototype.tamaño = function () {
    if (this.altura >= 1.80){
        console.log(`Soy alto`);
    }else {
        console.log('Soy Bajo');
    };
};//esta funcíon toma como parámetro altura y si es mayor que 1.8 es alto de lo contrario no lo es.

let angel = new persona ('Angel', 'Mazur', 1.70);
let andres = new persona ('Andres', 'Saa', 1.65);
let juanca = new persona ('Juan Carlos', 'Mora', 1.80);