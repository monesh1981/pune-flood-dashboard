var map = L.map('map').setView([18.5204, 73.8567], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function simulateRain() {
    var rainfall = document.getElementById("rainInput").value;
    var alertBox = document.getElementById("alertBox");
    var alertStatus = document.getElementById("alertStatus");

    if (rainfall > 150) {
        alertBox.style.backgroundColor = "red";
        alertStatus.innerHTML = "Emergency Alert";
    } else if (rainfall > 100) {
        alertBox.style.backgroundColor = "orange";
        alertStatus.innerHTML = "High Risk";
    } else if (rainfall > 50) {
        alertBox.style.backgroundColor = "yellow";
        alertBox.style.color = "black";
        alertStatus.innerHTML = "Watch Mode";
    } else {
        alertBox.style.backgroundColor = "green";
        alertBox.style.color = "white";
        alertStatus.innerHTML = "Normal";
    }
}
