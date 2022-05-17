const url="https://pokeapi.co/api/v2/pokemon/1";
fetch(url).then(function(respuesta){
    console.log(respuesta);
}).catch(function(error){
    console.log(error);
});