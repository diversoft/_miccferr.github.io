
    var map = L.map('map').setView([6.872,-5.955], 6);
    L.tileLayer('http://localhost/~mic/michele-ferretti/COMMITY1.3/img/tesi-tiles/{z}/{x}/{y}.png', {

        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Network Data <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);
    
  