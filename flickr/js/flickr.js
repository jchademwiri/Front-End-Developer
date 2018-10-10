$(document).ready(function () {


    $('form').submit(function (evt){
evt.preventDefault();
var $searchFild

        // the AJAX part
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var animal = $(this).text();
        var flickrOptions = {
            tags: animal,
            format: "json"
        };
        function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items, function (i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            }); // end each
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    }); // end click

//weather API
var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';
var data = {
    q: "Portland,OR",
    units: "metric"
};
function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
}
$.getJSON(weatherAPI, data, showWeather);
   //END OF WEATHER API
   }); // end ready