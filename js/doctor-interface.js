//var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

function displayList(doctorInstance)
{
  // doctorInstance.doctorsArray.forEach(function(doctor){
  //   //console.log(doctor.first_name + " " + doctor.last_name);
  //   $('#show-doctors').append("first name " + doctor.first_name + " last name " + doctor.last_name);
  // });
};

var doctorInstance = new Doctor();
$(document).ready(function() {
  $('form#input').submit(function(event){
    $("ul").text("");
    var userInput = $('#user-input').val();
    //$('#user-input').val("");

    doctorInstance.getDoctors(userInput);
    doctorInstance.doctorsArray.forEach(function(doctor){
      console.log(doctor.first_name + " " + doctor.last_name);
      $("ul").append("<li>" + doctor.first_name + " " + doctor.last_name + "</li>");
    });
    event.preventDefault();
  });
});
