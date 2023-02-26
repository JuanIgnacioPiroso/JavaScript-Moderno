/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

/* ********** Funcion para crear mazo mezclado ********** */
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
};
/* ********** Funcion para crear mazo mezclado ********** */

/* ********** Funcion para pedir una carta ********** */
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en la baraja";
  }

  const carta = deck.pop();

  return carta;
};
/* ********** Funcion para pedir una carta ********** */

/* ********** Funcion para saber el valor de una carta ********** */
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
/* ********** Funcion para saber el valor de una carta ********** */

crearDeck();
pedirCarta();
