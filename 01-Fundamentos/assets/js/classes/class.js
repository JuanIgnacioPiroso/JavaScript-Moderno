class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFavorita(comida){
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita(){
    return `La comida favorita de ${this.nombre } es ${this.comida}`;
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

spiderman.miFrase();

spiderman.setComidaFavorita = 'Pie de cereza';

console.log(spiderman.getComidaFavorita);
console.log(spiderman);



