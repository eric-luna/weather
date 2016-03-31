$(document).ready(function(){
  var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+crd.latitude+'&lon='+crd.longitude+'&APPID=92375a06c245db2d01d68d8a93fc4cd3';
  $.ajax({url: url, dataType: 'jsonp',success: function(result){
           // Background
          var icon = result.weather[0].icon;
          if(icon === "01d" || icon==="02d"){
            $('body').css('background-image', 'url("' + "../img/sunnyDay.jpg" + '")');
          }else if(icon === "03d" || icon === "04d" ){
            $('body').css('background-image', 'url("' + "../img/cloudyDay.jpg" + '")');
          }else if(icon === "09d" || icon === "10d"){
            $('body').css('background-image', 'url("' + "../img/rainyDay.jpg" + '")');
          }else if(icon === "11d"){
            $('body').css('background-image', 'url("' + "../img/thunderstormDay.jpg" + '")');
          }else if(icon === "13d"){
            $('body').css('background-image', 'url("' + "../img/snowDay.jpg" + '")');
          }else if(icon === "50d"){
            $('body').css('background-image', 'url("' + "../img/foggyDay.jpg" + '")');
          }if(icon === "01n" || icon==="02n"){
            $('body').css('background-image', 'url("' + "../img/clearNight.jpg" + '")');
          }else if(icon === "03n" || icon === "04n" ){
            $('body').css('background-image', 'url("' + "../img/cloudyNight.jpg" + '")');
          }else if(icon === "09n" || icon === "10n"){
            $('body').css('background-image', 'url("' + "../img/rainyNight.jpg" + '")');
          }else if(icon === "11n"){
            $('body').css('background-image', 'url("' + "../img/thunderstormNight.jpg" + '")');
          }else if(icon === "13n"){
            $('body').css('background-image', 'url("' + "../img/snowNight.jpg" + '")');
          }else if(icon === "50n"){
            $('body').css('background-image', 'url("' + "../img/foggyNight.jpg" + '")');
          }
          // Location Name
          $(".location").append("<p class='name'>"+result.name+"</p>");
          // Icon & Description
          $(".icon").append("<img src='http://openweathermap.org/img/w/"+icon+".png'>");
          $(".description").append(result.weather[0].description.toUpperCase());
          // Temp
          var kelvinTemp = result.main.temp;
          var fahrenheit = Math.floor(kelvinTemp * (9/5) - 459.67);
          var celsius = Math.floor(kelvinTemp - 273.15);
          $(".temp").append("<p>"+fahrenheit+ " &#8457" + "</p>");
          // Humidity
          var humidity = result.main.humidity + "%";
          $(".humidity").append("<p>"+humidity+"</p>");
    }});
};
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
navigator.geolocation.getCurrentPosition(success, error, options);  
});

      
    
  
 