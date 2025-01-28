<template>
  <div id="map" class="h-[500px] w-full rounded-lg shadow-md"></div>
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
    // Crear el mapa
    const map = L.map('map').setView([0, 0], 2);

    // Agregar capa de tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Agregar marcadores de terremotos
    this.earthquakes.forEach((quake) => {
      const [lng, lat] = quake.geometry.coordinates;
      L.marker([lat, lng]).addTo(map).bindPopup(`
        <strong>${quake.properties.place}</strong><br>
        Magnitud: ${quake.properties.mag}
      `);
    });

    // Forzar redimensionamiento para evitar problemas de diseño
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  },
};
</script>

<style scoped>
#map {
  height: 100%;
}
</style>
