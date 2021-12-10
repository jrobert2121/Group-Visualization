// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

  // Create the map object with center, zoom level and default layer.
  let myMap = L.map('map', {
    center: [42.3601, -71.0589],
    zoom: 11,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(myMap);

// Use this link to get the geojson data.
var link = "static/data/Wicked_Free_Wi-Fi_Locations.geojson";

// Get our GeoJSON data using d3.json
d3.json(link, function(data) {
    console.log(data);
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.Neighborhood + "</h2> <hr> <h3>Address: " + feature.properties.Address + "</h3>")
        }
    }).addTo(myMap);

});

// Use this link to get neighborhood geojson data
var bostonHoods = "static/data/Boston_Neighborhoods.geojson";

// get geojson data using d3
d3.json(bostonHoods, (function(data) {
    console.log(data);
    L.geoJSON(data, {
        color: "red",
        fillColor: "blue",
        weight: 2,
        onEachFeature: function(feature, layer) {
            layer.on ({
                //When a neighborhood is clicked, it is enlarged to fit the screen
                click: function(event) {
                    myMap.fitBounds(event.target.getBounds());
                }
            });
            // create popup with neighborhood name
            layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.Name + "</h2>");
        }
    }).addTo(myMap);
}));