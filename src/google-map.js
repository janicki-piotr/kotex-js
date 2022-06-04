function initMap() {
    const kotex = { lat: 51.77645432720881, lng: 19.489284654846024 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: kotex,
    });
    const marker = new google.maps.Marker({
      position: kotex,
      map: map,
    });
  }
  
  window.initMap = initMap;