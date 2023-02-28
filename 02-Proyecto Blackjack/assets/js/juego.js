/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

(() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnMeQuedo"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugador = document.querySelector("#jugador-cartas"),
    divCartasComputadora = document.querySelector("#computadora-cartas");

  const puntosHTML = document.querySelectorAll("small");

  /* ********** Funcion para iniciar juego ********** */
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();

    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
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

  const acumularPuntos = () => {};

  /* ********** Turno de la computadora ********** */
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();

      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTML[1].innerText = puntosComputadora;

      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = document.createElement("img");
      imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
      imgCarta.classList.add("carta");
      divCartasComputadora.append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

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
  /* ********** Turno de la computadora ********** */

  /* ******************** Eventos ******************** */

  /* ******************** Boton Pedir Carta ******************** */
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add("carta");
    divCartasJugador.append(imgCarta);

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

    turnoComputadora(puntosJugador);
  });
  /* ******************** Boton Me Quedo ******************** */

  /* ******************** Boton Nuevo Juego ******************** */
  btnNuevo.addEventListener("click", () => {
    console.clear();
    inicializarJuego();
    //deck = [];
    //deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = "";
    divCartasJugador.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  });
  /* ******************** Boton Nuevo Juego ******************** */

  /* ******************** Eventos ******************** */
})();
