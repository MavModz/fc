<template>
  <main>
    <div ref="map" class="l-map"></div>
  </main>
</template>

<script>
import * as L from "leaflet";

export default {
  props: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  mounted() {

    const map = L.map(this.$refs.map).setView([this.latitude, this.longitude], 13);

    // Set the tile layer (you can use any available tile layer service)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker to the map at the given latitude and longitude
    L.marker([this.latitude, this.longitude]).addTo(map)
      .bindPopup('You are here')
      .openPopup();
  },
};
</script>

<style scoped>
.l-map {
  height: 300px;
  width: 100%;
  margin-top: 20px;
}
</style>
