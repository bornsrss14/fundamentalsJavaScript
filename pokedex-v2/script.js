/* EVERYTHING RELATED WITH POKEMON CARDS  */
// Selecciona todas las tarjetas de Pokémon
const cardsContainer = document.querySelector(".cartas");
const abilitiesContainer = document.querySelector(".abilitiesDiv");
const resultBox = document.querySelector(".results");
const inputBox = document.querySelector(".search-bar");
const btnSearchPokemon = document.querySelector(".btnSearchPokemon");

/* FUNCIÓN QUE RECUPERA LOS PRIMEROS 1000 POKEMONES EXISTENTES PARA PODER AGREGARLOS Y BUSCARLOS */

const styleInformation = function () {
  const pokemonCards = document.querySelectorAll(".pokemonCard");
  pokemonCards.forEach((card) => {
    const descriptionContainer = card.querySelector(".description");
    const childElements = descriptionContainer.children;
    for (const child of childElements) {
      child.classList.add("marginChild");
    }
  });
};

const appendAbilities = function (arrayOfAbilities) {
  return arrayOfAbilities
    .map((ability) => `<div class="abilitieItem">${ability.ability.name}</div>`)
    .join("");
};

const maxPokemon = 1025;
const pokemonList = []; // Array to store Pokémon names

// Function to fetch Pokémon names from the API
const fetchPokemonNames = async function () {
  for (let i = 1; i <= maxPokemon; i++) {
    await retrievePokemonById(i); // Fetch Pokémon data and store the name
  }
};

// Fetch individual Pokémon by ID and push the name to the list
const retrievePokemonById = async function (idPokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((response) => {
      /* convert the response into JSON and handler the error */
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      pokemonList.push(data.name); // Push Pokémon name to the array
    })
    .catch((error) => {
      console.error("Failed :( ", error);
    });
};

// Function to display filtered results
const displayResults = function (result) {
  const resultHTML = result
    .map(function (pokemon) {
      return `<li onclick="selectInput(this)">${pokemon}</li>`;
    })
    .join("");
  resultBox.innerHTML = "<ul>" + resultHTML + "</ul>";
};

// Handle input and filter results
inputBox.onkeyup = function () {
  const input = inputBox.value.toLowerCase();

  if (input.length === 0) {
    resultBox.innerHTML = "";
    return;
  }

  const result = pokemonList.filter((pokemon) =>
    pokemon.toLowerCase().includes(input)
  );

  displayResults(result);
};

// Function to select and input the Pokémon name
function selectInput(pokemon) {
  inputBox.value = pokemon.innerText;
  resultBox.innerHTML = "";
}
btnSearchPokemon.onclick = function () {
  const pokemonName = inputBox.value.toLowerCase();
  if (pokemonName) {
    fetchPokemonData(pokemonName);
    inputBox.value = "";
  }
};

// Fetch Pokémon data by name and render the card
const fetchPokemonData = function (pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Pokémon not found: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      renderPokemonCard(data); // Call function to render the card
    })
    .catch((error) => {
      console.error("Failed to fetch Pokémon data:", error);
    });
};

// Start fetching Pokémon names when the script runs
fetchPokemonNames();

const renderPokemonCard = function (data) {
  styleInformation();
  const html = `
  <div class="pokemonCard">
          <div id="imgContainer">
            <img
              loading="lazy"
              class="pokeImg"
              src="${data.sprites.other.home.front_default}"
              alt=""
            />
          </div>
          <div class="info">
            <div><h1>${data.name.toUpperCase()}</h1></div>
            <div class="abilitiesDiv">
              ${appendAbilities(data.abilities)}
            </div>
            <div class="description">
              <h2 class="medida--metros">${data.height / 10} M</h2>
              <h2 class="medida--kilos">${data.weight / 10} K</h2>
              <h3 class="alt-altura">📏 Height</h3>
              <h3 class="alt-peso">⚖️ weight</h3>
            </div>
            <button class="btnInformation">⚡︎ more about</button>
          </div>
        </div>
  `;
  cardsContainer.insertAdjacentHTML("beforeend", html);
  styleInformation();
};

// const getDataPokemon = function (pokemonName) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then(function (responsePokemon) {
//       // console.log(responsePokemon);
//       return responsePokemon.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderPokemonCard(data);
//     });
// };

// getDataPokemon("pachirisu");

/* ahora vamos a consumir una API para los tipos de pokemon */

const pokemonType = function () {
  fetch("https://pokeapi.co/api/v2/type/")
    .then(function (responseType) {
      return responseType.json();
    })
    .then(function (dataType) {
      console.log(dataType);
      /* aquí es donde voy a renderizar los botones de tipos de pokemon */
    });
};
pokemonType();
