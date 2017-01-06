//var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctorInstance = new Doctor();
  $('form#input').submit(function(event){
    event.preventDefault();

    var userInput = $('#user-input').val();
    doctorInstance.getDoctors(userInput);
  });
});
