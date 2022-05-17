const el_contenedor =  document.getElementById("contenido-principal");

function obtener_pokemon(pokemon) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  fetch(url).then(function(respuesta) {
    return respuesta.json();
  }).then(function(datos) {
    // Crear división
    let div = document.createElement("div");
    div.classList.add("pkmn-card");
    // Crear el nombre del Pkmn
    let texto = document.createElement("p");
    texto.innerHTML = datos["name"];
    // Crear la imagen del Pkmn
    let imagen = document.createElement("img");
    imagen.src = datos["sprites"]["front_default"];
    // Agregar el Pkmn al contenedor
    div.appendChild(texto);
    div.appendChild(imagen);
    el_contenedor.appendChild(div);
  }).catch(function(error) {
    console.log(error);
  });
}

obtener_pokemon(1);
obtener_pokemon(6);
obtener_pokemon(599);
obtener_pokemon(666);