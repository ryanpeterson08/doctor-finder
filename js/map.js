require('mapbox.js');
var mapboxKey = require('./../.env').mapboxKey;

function Map(){
  L.mapbox.accessToken = mapboxKey;
  this.map = L.mapbox.map('map', 'mapbox.streets').setView([45.5, -122,5], 9);
}

exports.mapModule = Map;
