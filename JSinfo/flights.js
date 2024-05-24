const divResultado = document.querySelector("resultado");

//String methods practice
const flights =
  "_Arrival;hel4409433847;fao93766109;14:25+_Arrival;hel5529433847;txl93766145;16:05+_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//nuestro objetivo es tener un resultado así
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Dep
document.addEventListener("DOMContentLoaded", function () {
  var resultadoDiv = document.getElementById("resultado");
  var btnConvertir = document.getElementById("btnConvertir");

  btnConvertir.addEventListener("click", function () {
    const resultadoFinal = funFormat();
    resultadoDiv.innerText = resultadoFinal;
  });
});
// `${delayed} ${departure} from ${cod} to ${cod} (${hour}) `;
//lo que principalmente va a dividir la cadena es el '+'
const getCode = (str) => str.slice(0, 3).toUpperCase();
const funFormat = function () {
  let result = "";
  for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const salida = `${
      type.startsWith("_Delayed") ? "⊹" : "♡"
    } ${type.replaceAll("_", " ")} ${getCode(from)} ${getCode(
      to
    )} (${time.replace(":", "h")})`;
    result += salida + "\n";
  }
  return result;
};
