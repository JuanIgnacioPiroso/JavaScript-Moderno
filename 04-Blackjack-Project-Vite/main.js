import "./style.css";
import _ from 'underscore'
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnMeQuedo"),
    btnNuevo = document.querySelector("#btnNuevo"),
    divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  /* ********** Funcion para iniciar juego ********** */
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerText = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };
  /* ********** Funcion para iniciar juego ********** */

  /* ********** Funcion para crear mazo mezclado ********** */
  const crearDeck = () => {
    deck = [];

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

    return _.shuffle(deck);
  };
  /* ********** Funcion para crear mazo mezclado ********** */

  /* ********** Funcion para pedir una carta ********** */
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };
  /* ********** Funcion para pedir una carta ********** */

  /* ********** Funcion para saber el valor de una carta ********** */
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };
  /* ********** Funcion para saber el valor de una carta ********** */

  /* ********** Funcion para saber el puntaje de cada jugador ********** */
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
  };
  /* ********** Funcion para saber el puntaje de cada jugador ********** */

  /* ********** Funcion para crear imagenes de las cartas ********** */
  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };
  /* ********** Funcion para crear imagenes de las cartas ********** */

  /* ********** Funcion para determinar el ganador ********** */
  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 100);
  };
  /* ********** Funcion para determinar el ganador ********** */

  /* ********** Turno de la computadora ********** */
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;

    do {
      const carta = pedirCarta();

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };
  /* ********** Turno de la computadora ********** */

  /* ******************** Eventos ******************** */

  /* ******************** Boton Pedir Carta ******************** */
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Lo siento mucho, perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });
  /* ******************** Boton Pedir Carta ******************** */

  /* ******************** Boton Me Quedo ******************** */
  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  });
  /* ******************** Boton Me Quedo ******************** */

  /* ******************** Boton Nuevo Juego ******************** */
  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });
  /* ******************** Boton Nuevo Juego ******************** */

  /* ******************** Eventos ******************** */

  return {
    nuevoJuego: inicializarJuego,
  };
})();
