//var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctorInstance = new Doctor();
  $('form#input').submit(function(event){
    event.preventDefault();

    var userInput = $('#user-input').val();
    doctorInstance.getDoctors(userInput);

    doctorInstance.doctorsArray.forEach(function(doctor){
      //console.log(doctor.first_name + " " + doctor.last_name);
      $('#show-doctors').append("<h4>" + doctor.first_name + " " + doctor.last_name + "</h4");
    });
  });
});
