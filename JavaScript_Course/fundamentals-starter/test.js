const functionUno = texto => {
  texto = texto.toLowerCase();
  let contadorVocales = 0;
  for (let i = 0; i < texto.length; i++) {
    if (
      texto[i] === 'a' ||
      texto[i] === 'e' ||
      texto[i] === 'i' ||
      texto[i] === 'o' ||
      texto[i] === 'u'
    ) {
      contadorVocales ++;
    }
  }
  return contadorVocales;
}

let resultado = functionUno('Rosario');
console.log(resultado);

