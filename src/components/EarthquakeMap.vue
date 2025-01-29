<template>
  <div id="map" class="h-full w-full"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  props: {
    earthquakes: {
      type: Array,
      required: true,
    },
    selectedEarthquake: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      map: null, // Referencia al mapa
      popup: null, // Popup para mostrar información del terremoto seleccionado
      markers: [], // Lista de marcadores en el mapa
    };
  },
  watch: {
    selectedEarthquake(newQuake) {
      if (newQuake) {
        this.showPopup(newQuake.geometry.coordinates, newQuake.properties);
      }
    },
  },
  mounted() {
    // Configura el token de Mapbox
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

    // Inicializa el mapa
    this.map = new mapboxgl.Map({
      container: 'map', // ID del contenedor
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [0, 0], // Coordenadas iniciales
      zoom: 2, // Zoom inicial
    });

    // Forzar el recalculo del tamaño del mapa después de renderizar
    this.$nextTick(() => {
      this.map.resize();
    });

    // Inicializar el popup
    this.popup = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: true,
      offset: 25,
      maxWidth: '300px', // Limita el ancho del popup
    });

    // Agregar los marcadores iniciales
    this.addMarkers(this.earthquakes);

    // Detectar cambios en el tamaño del contenedor
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.map) this.map.remove(); // Eliminar el mapa al destruir el componente
  },
  methods: {
    handleResize() {
      this.map.resize(); // Ajustar el tamaño del mapa al cambiar el tamaño de la ventana
    },
    addMarkers(earthquakes) {
      // Eliminar marcadores existentes
      this.markers.forEach((marker) => marker.remove());
      this.markers = [];

      // Agregar nuevos marcadores
      earthquakes.forEach((quake) => {
        const [lng, lat] = quake.geometry.coordinates;
        const marker = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup().setHTML(`
              <strong>${quake.properties.place}</strong><br>
              Magnitud: ${quake.properties.mag}
            `)
          )
          .addTo(this.map);

        this.markers.push(marker);
      });

      // Recalcular el tamaño del mapa para evitar errores de visualización
      this.map.resize();
    },
    showPopup(coordinates, properties) {
      const [lng, lat] = coordinates;

      // Centrar el mapa con suficiente margen para mostrar el popup
      this.map.flyTo({
        center: [lng, lat],
        zoom: 6, // Ajusta el nivel de zoom
        padding: {
          top: 200, // Incrementa el margen superior para que el popup no quede fuera
          bottom: 50,
          left: 50,
          right: 50,
        },
        essential: true,
      });

      // Mostrar el popup
      this.popup
        .setLngLat([lng, lat])
        .setHTML(`
          <div>
            <strong>${properties.place}</strong><br>
            Magnitud: ${properties.mag}<br>
            Fecha: ${new Date(properties.time).toLocaleString()}
          </div>
        `)
        .addTo(this.map);
    },
  },
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
