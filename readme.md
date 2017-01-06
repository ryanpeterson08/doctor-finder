# Doctor Finder App

#### Web app that allows user to search for doctors by their condition or doctor name, 1/6/2017

#### By Ryan Peterson

## Description

This web app allows the user to input either a condition or a doctor name.  When submitted the api is called and a list of doctors is displayed for the user.

## Setup/Installation Requirements
* Download or clone git repo at https://github.com/ryanpeterson08/doctor-finder
* Run npm install
* Run bower install
* Run gulp build
* Run gulp serve
* Index.html should open up on your default browser, if not, go to localhost:3000


##Specs

| Input    | Output                        | Description                                                                                                                    |
|----------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| "flu"    | [Thomas Guy, Susie Peters]    | User inputs symptom -> api is called and stores doctors that match the criteria into list, which is then displayed to the user |
| "Thomas" | [Thomas Guy, Thomas Peterson] | User inputs name -> api is called and stores doctors that match that name into list, which is then displayed to the user       |

## Known Bugs

None

## Support and contact details

Email: ryanpeterson08@gmail.com

## Technologies Used

* HTML/CSS
* Javascript
* Jquery/Bootstrap
* BetterDoctor API
* npm, bower, gulp

### License

Copyright (c) 2017 Ryan Peterson
