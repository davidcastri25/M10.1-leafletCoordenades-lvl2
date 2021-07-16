
/* ////////// Nivel 1 - Fase 1 ////////// */

//Proveedor de Tiles: Open Street Map
const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

let mapFase1 = L.map("mapFase1").setView([41.38715190920178, 2.1700741025685213], 16); //setView(arrayCoordenadas, zoom)

//Definimos

//En el tileLayer le pasamos nustro proveedor y un objeto con las características, y lo añadimos a nuestro mapa.
let tileLayerOptions = {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
};

L.tileLayer(tilesProvider, tileLayerOptions).addTo(mapFase1);

/*
 var mapFase1 = L.map('mapFase1').setView([41.38715190920178, 2.1700741025685213], 15);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mapFase1);
  */



/* ////////// Nivel 2 - Fase 2 ////////// */
//Marcador en Carrer Balmes 16
let marker = L.marker([41.3868561, 2.1661102]).addTo(mapFase1);

marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona");




/* ////////// Nivel 2 - Fase 1 ////////// */
mapFase1.on("click", e => {
    //Primero obtenemos la latitud y longitud del click
    let latLng = mapFase1.mouseEventToLatLng(e.originalEvent);

    //Borramos marcador anterior
    mapFase1.removeLayer(marker);

    //Agregamos nuevo marcador
    marker = L.marker([latLng.lat, latLng.lng]).addTo(mapFase1);

    //Agregamos popUp al nuevo marcador, queremos que se abra automáticamente
    marker.bindPopup("<b>Mis coordenadas son:</b><br><br>Lat: " + latLng.lat + "<br>Lng: " + latLng.lng).openPopup();

    //Ajustamos el centro del mapa y el zoom a la nueva selección (el zoom será el zoom máximo definido en las opciones de tileLayer)
    mapFase1.setView(latLng, tileLayerOptions.maxZoom);
});