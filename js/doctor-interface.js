var Doctor = require('./../js/doctor.js').doctorModule;
var mapboxKey = require('./../.env').mapboxKey;
var locations = [];
L.mapbox.accessToken = mapboxKey;


function addMarkers(address)
{
  //locations = [];
  $.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + mapboxKey).then(function(result){
    locations.push(result);
  });
  console.log(locations[0]);
}


var doctorInstance = new Doctor();

$(document).ready(function() {
  var map = L.mapbox.map('map', 'mapbox.streets').setView([45.5, -122.65], 10);
  $('form#condition').submit(function(event){
    $("ul").text("");
    var userInput = $('#user-condition').val();

    doctorInstance.searchByCondition(userInput);
    doctorInstance.doctorsArray.forEach(function(doctor){
      $("ul").append("<li>" + doctor.profile.first_name + " " + doctor.profile.last_name +"</li>" + "<img src=" + doctor.profile.image_url + ">");

      addMarkers(doctor.practices[0].visit_address.street);
    });
    event.preventDefault();
  });

  $('form#doctor-name').submit(function(event){
    $("ul").text("");
    var userInput = $('#user-doctor').val();

    doctorInstance.searchByName(userInput);
    doctorInstance.doctorsArray.forEach(function(doctor){
      $("ul").append("<li>" + doctor.profile.first_name + " " + doctor.profile.last_name +"</li>" + "<img src=" + doctor.profile.image_url + ">");

      addMarkers(doctor.practices[0].visit_address.street);
    });
    event.preventDefault();
  });
});
