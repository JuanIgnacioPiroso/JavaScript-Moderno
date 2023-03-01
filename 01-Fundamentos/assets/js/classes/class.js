class Persona {
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  quienSoy(){
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase(){
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona('Peter Parker','Spiderman','La de peter parker no falla');
const ironman = new Persona('Tony Stark','IronMan','Soy ironman');

console.log(spiderman);
console.log(ironman);

spiderman.miFrase();
