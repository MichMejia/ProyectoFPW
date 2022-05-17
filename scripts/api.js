const contenedor = document.getElementById("contenido-principal");
const url = "https://raw.githubusercontent.com/MichMejia/Base-API/master/base_datos.json";
const uri = "https://raw.githubusercontent.com/MichMejia/Base-API/master/";

fetch(url).then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  console.log(datos);
  for(let i = 0; i < datos.length; i++) {
    contenedor.innerHTML += "<div class='poster'>";
    contenedor.innerHTML += "<img src='" + uri + datos[i]["imagen"] + "'>"
    contenedor.innerHTML += "<h3>" + datos[i]["Tipo"] + "</h3></div>";
  }
}).catch(function(error) {
  console.log(error);
});