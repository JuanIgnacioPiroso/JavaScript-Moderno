let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
};

console.log(personaje);

console.log("Nombre:", personaje.nombre);

console.log("Nombre:", personaje["nombre"]);

console.log("Edad:", personaje.edad);

console.log("Coors:", personaje.coords);

console.log("Coors(lat):", personaje.coords.lat);

console.log("Numero de trajes:", personaje.trajes.length);

console.log("Ultimo traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:',personaje[x]);

// Mas detalles

delete personaje.edad;

console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 10000000;

console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades,valores});
