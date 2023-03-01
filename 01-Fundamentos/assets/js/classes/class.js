class Persona {
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}

const spiderman = new Persona('Peter Parker','Spider','La de peter parker no falla');
const ironman = new Persona('Tony Stark','IronMan','Soy ironman');

console.log(spiderman);
console.log(ironman);
