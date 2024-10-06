"use stric";
const countriesContainer = document.getElementById("countries--cards");
const btn = document.querySelector(".countriesBtn");
function setDisplayFlex() {
  const parentDivReference = document.querySelector(".divCountryDescription");
  const childDivs = parentDivReference.querySelectorAll("div");
  /* Apply display flex at every item */
  childDivs.forEach((div) => {
    // div.style.display = "flex";
    div.classList.add("descriptionCardStyle");
  });
}

/* LLAMADA DE FUNCIONES */

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/france");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
   <div class="countryCardDiv">
        <div class="divCountryFlag">
          <img class="imgFlag" src="${data.flags.png}" alt="" />
        </div>
        <div class="divCountryName" >
          <h1 class="country">${data.name.common}</h1>
          <p class="continent">${data.region}</p>
        </div>
        <div class="divCountryDescription">
          <div class="divPopulation descriptionCardStyle">
            <p>🙍🙍‍♂️ </p>
            <p class="population"> ${(+data.population / 1000).toFixed(
              1
            )} people</p>
          </div>
          <div class="divLanguage descriptionCardStyle">
            <p>🗣️ </p>
            <p class="languaje">${Object.values(data.languages)[0]}</p>
          </div>
          <div class="divCurrency descriptionCardStyle">
            <p>💱 </p>
            <p class="currency"> ${Object.values(data.currencies)[0].name}</p>
          </div>
        </div>
      </div>
     
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  setDisplayFlex();
});

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Seleccionar el <select> en el DOM
    const selectElement = document.getElementById("selectCountry");

    // Mostrar los primeros 14 países
    data.slice(0, 50).forEach((country) => {
      // Crear un <option> por cada país
      const option = document.createElement("option");
      option.value = country.cca2; // El código del país (ISO 3166-1 alfa-2)
      option.textContent = country.name.common; // Nombre común del país

      // Añadir la opción al <select>
      selectElement.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries:", error);
  });
// const img = document.querySelector(".image");
// img.src = "gatito.jpg"; // Set the image source
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });

/* EVERYTHING RELATED OF COUNTRIES CARDS */
