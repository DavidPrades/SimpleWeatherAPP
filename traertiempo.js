window.onload = function() {


}


function devolverCiudad() {
    var linkCompleto = "http://api.weatherstack.com/current?access_key=a8d5137b8d9d41445f8507ea88240ff2&query="
    var access_key = "a8d5137b8d9d41445f8507ea88240ff2";
    var query = document.getElementById("inputCiudad").value;
    var parrafo = document.getElementById("cosas");


    fetch("http://api.weatherstack.com/current?access_key=" + access_key + "&query=" + query)
        .then(response => {
            if (response.status == 200) {
                return response.text();
            } else {

            }
        })
        .then(response => {
            var ciudadJSON = JSON.parse(response);
            var temperature = ciudadJSON.current.temperature;
            var name = ciudadJSON.location.name;
            var imagenes = ciudadJSON.current.weather_icons;
            var descripcion = ciudadJSON.current.weather_descriptions;

            var cards = document.getElementsByClassName("cards")[0]
            var card = document.createElement("div");
            card.className = "card";
            cards.appendChild(card)

            var ciudad = document.createElement("h2");
            var name = document.createTextNode(name);
            ciudad.appendChild(name);

            var temperaturas = document.createElement("p");
            var temperatura = document.createTextNode(temperature + "°");
            temperaturas.appendChild(temperatura);

            var img = document.createElement("IMG");
            img.setAttribute("src", imagenes);

            var description = document.createElement("p");
            var descripcionTemp = document.createTextNode(descripcion);
            description.appendChild(descripcionTemp);

            card.appendChild(ciudad);
            card.appendChild(temperaturas);
            card.appendChild(img);
            card.appendChild(description);


        })
        .catch(function(error) {


            window.alert("La ciudad introduce no es correcta");

        });





}