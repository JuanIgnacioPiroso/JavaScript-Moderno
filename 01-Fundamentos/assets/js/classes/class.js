class Persona {
  static _conteo = 0;

  static get conteo(){
    return Persona._conteo + ' instancias';
  }

  static mensaje(){
    console.log('Soy un metodo estatico');
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "La de peter parker no falla"
);
const ironman = new Persona("Tony Stark", "IronMan", "Soy ironman");

spiderman.miFrase();

spiderman.setComidaFavorita = "Pie de cereza";

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

console.log("Conteo estatico: ", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);