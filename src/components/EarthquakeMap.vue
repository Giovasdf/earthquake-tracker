<template>
  <div id="map" class="h-96 w-full"></div>
</template>

<script>
import L from 'leaflet';

export default {
  props: {
    earthquakes: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    this.earthquakes.forEach((quake) => {
      const [lng, lat] = quake.geometry.coordinates;
      L.marker([lat, lng]).addTo(map).bindPopup(`
        <strong>${quake.properties.place}</strong><br>
        Magnitud: ${quake.properties.mag}
      `);
    });
  },
};
</script>

<style>
#map {
  height: 100%;
}
</style>
