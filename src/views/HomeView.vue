<template>
  <div class="wrapper">
    <div class="search-area d-flex justify-content-center align-items-center border">
      <input type="text" aria-label="searchbar" placeholder="請輸入區或路名" />
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';

export default {
  mounted() {
    const map = L.map('map').setView([22.6563171, 121.4711553], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    L.control.locate().addTo(map);
  },
};
</script>

<style lang="scss">
.wrapper {
  .search-area {
    height: 100px;
    background: #333333;
  }
  #map{
    height: calc(100vh - 100px);
  }
}
</style>
