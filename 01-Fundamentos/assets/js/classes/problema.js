const jpi = {
  nombre: "Juan",
  edad: 20,
};

const pedro = {
  nombre: "Pedro",
  edad: 15,
};

function Persona(nombre, edad) {
  console.log("Se ejecuto esta linea");

  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();
