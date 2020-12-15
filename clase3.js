//Operaciones con numeros
let edad = 30;

edad += 1;
edad ++; //edad +1

let peso = 70;

peso -= 2;
peso --; //edad -1

//Para sumar o restar variables se pueden hacer de la siguiente manera
let carne = 1;
let gym = 2;

peso += carne;

peso -= gym;

//operaciones con decimales
let precioJamon = 10.35;

let total0 = precioJamon /2;

let total = Math.round (precioJamon * 4); //redondea una cantidad
let totalstr = total0.toFixed(2); // toma en cuenta la cantidad de decimales que queramos y nos devuelve la respuesta en string
let total2= parseFloat(totalstr); //convierte la respuesta de string a numero de punto flotante