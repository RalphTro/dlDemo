document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([50.942499, 6.898247], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([50.942499, 6.898247]).addTo(map)
        .bindPopup('Example Location One')
        .openPopup();

    const polygon = L.polygon([
        [50.942499, 6.898247],
        [50.942275, 6.898292],
        [50.942263, 6.898094],
        [50.942106, 6.898126],
        [50.942130, 6.898526],
        [50.942512, 6.898451],
        [50.942499, 6.898247]
    ]).addTo(map);
});
