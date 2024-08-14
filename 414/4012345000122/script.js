document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([50.942499, 6.898247], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([50.942499, 6.898247]).addTo(map)
        .bindPopup('Example Location One')
        .openPopup();
});
