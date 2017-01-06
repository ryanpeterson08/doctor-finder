var Doctor = require('./../js/doctor.js').doctorModule;


var doctorInstance = new Doctor();
$(document).ready(function() {
  $('form#condition').submit(function(event){
    $("ul").text("");
    var userInput = $('#user-condition').val();
    //$('#user-input').val("");

    doctorInstance.getDoctors(userInput);
    doctorInstance.doctorsArray.forEach(function(doctor){
      console.log(doctor);
      $("ul").append("<li>" + doctor.first_name + " " + doctor.last_name +"</li>" + "<img src=" + doctor.image_url + ">");
    });
    event.preventDefault();
  });
});
