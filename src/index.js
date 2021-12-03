import './style.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicmFmbnVzcyIsImEiOiIzMVE1dnc0In0.3FNMKIlQ_afYktqki-6m0g';

const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/rafnuss/ckuefwskq3l5t17s3lcp1qx6m', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});