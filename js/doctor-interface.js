var Doctor = require('./../js/doctor.js').doctorModule;
var Map = require('./../js/map.js').mapModule;


var doctorInstance = new Doctor();

$(document).ready(function() {
  var mapInstance = new Map();
  $("#map").append(mapInstance)
  $('form#condition').submit(function(event){
    $("ul").text("");
    var userInput = $('#user-condition').val();

    doctorInstance.searchByCondition(userInput);
    doctorInstance.doctorsArray.forEach(function(doctor){
      //console.log(doctor);
      $("ul").append("<li>" + doctor.first_name + " " + doctor.last_name +"</li>" + "<img src=" + doctor.image_url + ">");
    });
    event.preventDefault();
  });

  $('form#doctor-name').submit(function(event){
    $("ul").text("");
    var userInput = $('#user-doctor').val();
    //$('#user-input').val("");

    doctorInstance.searchByName(userInput);
    doctorInstance.doctorsArray.forEach(function(doctor){
      //console.log(doctor);
      $("ul").append("<li>" + doctor.first_name + " " + doctor.last_name +"</li>" + "<img src=" + doctor.image_url + ">");
    });
    event.preventDefault();
  });
});
