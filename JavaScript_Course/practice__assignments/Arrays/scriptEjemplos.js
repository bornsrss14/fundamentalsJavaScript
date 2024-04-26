// Special spread operator podemos
//AQUI CREAMOS UN OBJETO INTERPOL
// const setlistInterpol = {
//   title: "Tidal Wave",
//   duration: "4:18",
//   album: "El Pintor",
//   artist: "Interpol",
//   publish: "8 de Sep 2014",
// };
// // 1. crear una copia superficial de el objeto
// // la copia no es el mismo objeto, se crea uno nuevo, pero las variables siguen haciendo referencia a la original
// const copiaSetlist = { ...setlistInterpol };
// console.log(copiaSetlist);
// console.log(copiaSetlist === setlistInterpol); //false
// console.log(setlistInterpol.title === copiaSetlist.title); //true

// // Fusionar objetos

const objeto__uno = {
  title: "Our love to admire",
  year: "2007",
  setList: {
    song1: {
      song: "Pioneer to the falls",
      dura: "5:41",
    },
    song2: {
      song: "No I in threesome ",
      dura: "3:50",
    },
    song3: {
      song: "The Scale",
      dura: "3:23",
    },
    song4: {
      song: "Peace is the Trick",
      dura: "4:36",
    },
    song5: {
      song: "Who do you think",
      dura: "3:12",
    },
  },
};
const objeto__dos = {
  title: "Turn on the bright lights",
  year: "2002",
  setList: {
    song1: {
      song: "Untitled",
      dura: "3:56",
    },
    song2: {
      song: "PDA",
      dura: "4:59",
    },
    song3: {
      song: "NYC",
      dura: "4:20",
    },
    song4: {
      song: "Say Hello To The Angels",
      dura: "4:28",
    },
    song5: {
      song: "Stella Was a Diver and she Was allways down",
      dura: "6:28",
    },
  },
};
const objeto1 = { a: 1, b: 2 };

const bandFusion = {...objeto__uno, ...objeto1};
console.log(bandFusion);
