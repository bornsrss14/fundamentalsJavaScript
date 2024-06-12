const dataJulia = [14, 4, 2, 78, 12, 3];
const dataKate = [18, 78, 1, 0, 1, 8];

const funCheckDogs = function (arryDogs1, arryDogs2) {
  const shallowCopyArry1 = arryDogs1.slice();
  shallowCopyArry1.splice(0, 1);
  shallowCopyArry1.splice(-2);
  const arryDogs = shallowCopyArry1.concat(arryDogs2);
  arryDogs.forEach((dog, index) => {
    const mayOrMin = dog < 3 ? "Puppy 🐶" : "Adult 🐕";
    console.log(`La mascota ${index + 1} es: ${mayOrMin}`);
  });
};

funCheckDogs(dataJulia, dataKate);
