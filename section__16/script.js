"use stric";
const countriesContainer = document.getElementById("countries--cards");
const btnSearch = document.querySelector(".btnSearch");
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
function loadCountries() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();

  request.addEventListener("load", function () {
    const countries = JSON.parse(this.responseText);
    const selectCountry = document.getElementById("selectCountry");

    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name.common.toLowerCase();
      option.textContent = country.name.common; // establish the text that it will be showed
      selectCountry.appendChild(option); // add option to the select element
    });
  });
}

const renderCountry = function (data) {
  const html = `
              <div class="countryCardDiv">
                  <div class="divCountryFlag">
                      <img class="imgFlag" src="${
                        data.flags.png
                      }" alt="Flag of ${data.name.common}" />
                  </div>
                  <div class="divCountryName">
                      <h1 class="country">${data.name.common}</h1>
                      <p class="continent">${data.region}</p>
                  </div>
                  <div class="divCountryDescription">
                      <div class="divPopulation descriptionCardStyle">
                          <p>🙍🙍‍♂️</p>
                          <p class="population">${(
                            +data.population / 1000
                          ).toFixed(1)} people</p>
                      </div>
                      <div class="divLanguage descriptionCardStyle">
                          <p>🗣️</p>
                          <p class="language">${
                            Object.values(data.languages)[0]
                          }</p>
                      </div>
                      <div class="divCurrency descriptionCardStyle">
                          <p>💱</p>
                          <p class="currency">${
                            Object.values(data.currencies)[0].name
                          }</p>
                      </div>
                  </div>
              </div>
          `;

  /* insert HTML code into container */
  // countriesContainer.innerHTML = ""; // clean the container
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

function retrieveCountryAndNeighbour() {
  const selector = document.getElementById("selectCountry");
  if (selector) {
    let countrySelected = selector.value.trim().toLowerCase(); // Retriev selected country
    // console.log(countrySelected); // shows country selected in the console

    const request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://restcountries.com/v3.1/name/${countrySelected}`
    );
    request.send();

    request.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      // console.log(data); // show data countries into the console
      /* render country data */
      renderCountry(data);

      // get neightbour's country
      const neightbour = data.borders?.[0];
      if (!neightbour) return;

      const request2 = new XMLHttpRequest();
      request.open("GET",`https://restcountries.com/v3.1/alpha/${neightbour}`);
      request2.send();
      request2.addEventListener("load", function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);
        renderCountry(data2);
      });
    });
  }
}
/* load countries when page is loaded*/
window.onload = loadCountries;
// Asociar la función al botón
btnSearch.addEventListener("click", retrieveCountryAndNeighbour);
// const img = document.querySelector(".image");
// img.src = "gatito.jpg"; // Set the image source
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });

/* EVERYTHING RELATED OF COUNTRIES CARDS */
