
const interpol = 'Interpol';
const str = 'Stella was a diver and she was allways down';

console.log(interpol[0]);
console.log(interpol[1]);
console.log(interpol[2]);

for (const iterator of interpol) {
    console.log(`Esto es el conjunto de ${iterator}`);
}

const newArray = [...interpol];

const ultimaLetra = newArray.pop();
console.log(ultimaLetra);
console.log(interpol.length);
console.log('Rosario'.length);

console.log('Rosario'.indexOf('R', 2));
console.log('Stella was a diver and she was allways down'.lastIndexOf('a'));