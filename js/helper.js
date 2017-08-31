/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var navBrand = '<a class="navbar-brand pull-xs-left font-dancing font-weight-bold" href="#">%data%</a>';
var navItem = '<li class="nav-item"><a class="nav-link" href="">%data%</a></li>';

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<p class="role">%data%</p>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
//Is it OK way to use two inputs(%data% and %author%) in one variable?
var HTMLwelcomeMsg = '<blockquote class="blockquote font-dancing"><p>%data%</p><footer class="blockquote-footer">%author%</footer></blockquote>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span>%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><a href="tel:555-555-5555"><i class="fa fa-mobile fa-lg" aria-hidden="true"></i><span>%data%</span></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto:nevena@example.com"><i class="fa fa-envelope" aria-hidden="true"></i><span>%data%</span></a></li>';
var HTMLgithub = '<li class="flex-item"><a href="https://github.com/nraovic" target="_blank"><i class="fa fa-github fa-lg" aria-hidden="true"></i><span>%data%</span></a></li>';
var HTMLlocation = '<li class="flex-item"><a href="https://goo.gl/maps/Bd6iTHBeJN82" target="_blank"><i class="fa fa-globe fa-lg" aria-hidden="true"></i><span>%data%</span></a></li>';

var HTMLskillsStart = '<h3 id="skills-h3" class="grayish text-center">Skills at a Glance:</h3><ul id="skills" class="text-center"></ul>';
var HTMLskills = '<li class="flex-item"><span class="skill-glance">%data%</span><i class="fa fa-check" aria-hidden="true"></i></li>';

//div elements are included because their number are going to be interactively updated 
var HTMLskillSetStart = '<div class="col-md-10 skillset"><ul class="skillset-list"></ul></div>';
var HTMLskillSetName = '<div class="col-md-2 skillset-name font-dancing">%data%</div>';
var HTMLskillSetUnit = '<li class="skillset-unit"><span class="badge badge-info">%data%<span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<span class="font-weight-bold">Description: </span><p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<span class="font-weight-bold">Description: </span><p>%data%</p>';
var HTMLprojectImage = '<img class="project-img img-fluid" src="%data%">';
var HTMLprojectChart = '<div class="chart"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em>Major: %data%</em>';

var HTMLonlineClasses = '<h3 class="online-class grayish">Online Classes</h3>';
var HTMLonlineTitle = '<i class="fa fa-star" aria-hidden="true"></i><a class="class-title" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<div class="class-url"><a href="#">%data%</a></div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*Setting off the page height for 50px when clicked on navigation because the fixed navbar overflows the content for its height.
The code has been taken from https://github.com/twbs/bootstrap/issues/1768
*/
var shiftWindow = function() {
    scrollBy(0, -50)
};
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.

$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});
*/
/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.

var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  //define x
  var x = loc.clientX;
  var y = loc.clientY;
  // define y
  // pass logClicks function
  logClicks(x, y)
});
*/


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });
        console.log(locations);
        return locations;

    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});