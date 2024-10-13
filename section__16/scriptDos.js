"use strict";

/* EJEMPLO INICIAL DE  UN FETCH Y LA PROMESA */
// const request = fetch("https://pokeapi.co/api/v2/pokemon/jigglypuff")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.error("Error requesting data", error);
//   });
// console.log(request);

const url = "https://pokeapi.co/api/v2/pokemon/jigglypuff";

fetch(url)
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
