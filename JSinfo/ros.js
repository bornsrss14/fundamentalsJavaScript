const btnConvertirEvent = document.querySelector("#btnConvertir");
const elementResultado = document.getElementById("resultado");
const elementInputTexto = document.querySelector("#inputTexto");

const convertToCamelCaseFunction = function () {
  const texto = elementInputTexto.value;
  const rows = texto.split("\n");

  for (const [indice, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)} ${'♡'.repeat(indice + 1)}`);
  }
};

btnConvertirEvent.addEventListener("click", convertToCamelCaseFunction);

// esto_Es_un_ejemplo
// rosario_fuentes_garcia
// maria_del_carmen_garcia
// Rebecca_Mendoza_Fuentes
// poder_lunar_14_$$
