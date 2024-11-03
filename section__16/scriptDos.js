"use strict";

/* EJEMPLO INICIAL DE  UN FETCH Y LA PROMESA */
// const request = fetch("https://pokeapi.co/api/v2/pokemon/jigglypuff")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.error("Error requesting data", error);
//   });
// console.log(request);

const getPokemonData = function (pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((responsePokemon) => {
      if (!responsePokemon.ok) throw new Error("Network response was not ok");
      return responsePokemon.json();
    })
    .then((data) => {
      //i manage the data stems from the fetch
      console.log(`Name: ${data.name}`);
      console.log(`Height: ${data.height}`);
      console.log(`Weight: ${data.weight}`);
      console.log(
        `Habilities: ${data.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}`
      );
      console.log(
        `Type: ${data.types.map((type) => type.type.name).join(", ")} `
      );
    });
};

getPokemonData("pikachu");
getPokemonData("jigglypuff");
getPokemonData("pachirisu");
getPokemonData("magikarp");
getPokemonData("eevee");
getPokemonData("squirtle");


function obtenerImagenPokemon(pokemon) {
  // Llamada a la API de PokeAPI
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json()) // Convertimos la respuesta a JSON
    .then(data => {
      // Accedemos a la imagen oficial del Pokémon
      const imagen = data.sprites.front_default;
      console.log(imagen); // Mostramos la URL de la imagen en la consola

      // Mostrar la imagen en el documento
      const imgElement = document.createElement('img');
      imgElement.src = imagen;
      document.body.appendChild(imgElement);
    })
    .catch(error => console.error('Error:', error));
}

// Llamada a la función para obtener la imagen de Pikachu
obtenerImagenPokemon('pachirisu');