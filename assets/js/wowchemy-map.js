/**
 * Map override for i-BRAIN (Amap/高德 China-accessible tiles)
 */
function initMap() {
  if ($('#map').length) {
    let map_provider = $('#map-provider').val();
    let lat = parseFloat($('#map-lat').val());
    let lng = parseFloat($('#map-lng').val());
    let zoom = parseInt($('#map-zoom').val());
    let address = $('#map-dir').val();

    let map = new L.map('map').setView([lat, lng], zoom);

    // Using AutoNavi (Amap) tiles - very reliable in China
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ["1", "2", "3", "4"],
      minZoom: 1,
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.amap.com/">Amap</a>'
    }).addTo(map);

    let marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(address);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  initMap();
});