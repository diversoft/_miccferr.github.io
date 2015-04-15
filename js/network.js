var southWest = L.latLng(8.313615081493341, -0.77890625),
	northEast = L.latLng(5.503447982149503, -10.000742187499999),
	bounds = L.latLngBounds(southWest, northEast);


var map = L.map('map',{maxBounds:bounds}).setView([6.963915238107185,-5.52886962890625], 7);


L.tileLayer('http://localhost/~mic/michele-ferretti/COMMITY1.3/img/tesi-tiles/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Network Data <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);

