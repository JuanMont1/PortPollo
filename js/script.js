//codigo creado por juan carvajal y valentina cortes
// creacion de api de google para la muestra de ubicacion

function iniciarMap(){
    var coord = {lat:4.5785251 ,lng: -74.2235269};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}