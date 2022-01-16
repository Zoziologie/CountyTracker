import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicmFmbnVzcyIsImEiOiIzMVE1dnc0In0.3FNMKIlQ_afYktqki-6m0g';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/rafnuss/ckuefwskq3l5t17s3lcp1qx6m', // style URL
    center: [-98.5795,39.8283], // starting position [lng, lat]
    zoom: 4 // starting zoom
});


// Add geolocate control to the map.
var geolocate = new mapboxgl.GeolocateControl({
    fitBoundsOptions:{
        maxZoom:10
    },
positionOptions: {
    enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})

map.addControl(geolocate);

geolocate.on('geolocate', () => {
    console.log('A geolocate event has occurred.');
});

map.on('load', () => {
    geolocate.trigger();
});