let juegos = ['Zelda','Mario','LOL','Minecraft'];
console.log('Largo:',juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];

console.log({primero,ultimo});

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr});
})

let nuevaLongitud = juegos.push('WOW'); // Inserto un elemento en la ultima posicion del array
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Hogwarts Legacy'); // Inserto un elemento en la primera posicion del array
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop(); // Borra el ultimo elemento del array y lo devuelve
console.log({juegoBorrado,juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos,2); // Borra dos elementos a partir de la posicion 1
console.log({juegosBorrados,juegos});

let lolIndex = juegos.indexOf('LOL'); // Regresa la posicion en la que se encuentra lo pasado en la funcion
console.log({lolIndex});


