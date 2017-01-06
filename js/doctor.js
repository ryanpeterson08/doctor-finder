var apiKey = require('./../.env').apiKey;

function Doctor()
{
  this.doctorsArray = [];
}

Doctor.prototype.getDoctors = function(userIssue)
{
  var instance = this;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     instance.doctorsArray = [];
     for(var x = 0; x < result.data.length; x++)
     {
       instance.doctorsArray.push(result.data[x].profile);
     }
      //console.log(instance.doctorsArray);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
