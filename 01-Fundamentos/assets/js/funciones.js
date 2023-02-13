function saludar(nombre) {
  //console.log("Hola " + nombre);
  return [1, 2, 3, 4, 5];
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

let nombre = "Juan";

const saludarFlecha = (nombre) => {
  console.log("Hola flecha: " + nombre);
};

const retornoDeSaludar = saludar(nombre);

//console.log(retornoDeSaludar);
//saludar2();
//saludarFlecha(nombre);

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
