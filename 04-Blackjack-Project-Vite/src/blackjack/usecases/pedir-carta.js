/**
 * @param {Array<String>} deck Es un arreglo de Strnig
 * @returns {String} Retorna la carta del mazo
 */

  /* ********** Funcion para pedir una carta ********** */
  export const pedirCarta = (deck) => {
    if ( !deck|| deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    return deck.pop();
  };
  /* ********** Funcion para pedir una carta ********** */
