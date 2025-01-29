<template>
  <div class="flex flex-col h-screen">
    <!-- Row 1: Mapa -->
    <div class="h-1/2 bg-white relative">
      <EarthquakeMap :earthquakes="earthquakes" :selectedEarthquake="selectedEarthquake" />
    </div>

    <!-- Row 2: Lista de terremotos -->
    <div class="h-1/2 bg-white p-4 overflow-y-auto">
      <h2 class="text-xl font-bold mb-4">Últimos terremotos</h2>
      <ul>
        <li v-for="quake in limitedEarthquakes" :key="quake.id"
          class="mb-4 border-b pb-2 last:border-b-0 cursor-pointer hover:bg-gray-100 transition"
          @click="selectEarthquake(quake)">
          <p><strong>Lugar:</strong> {{ quake.properties.place }}</p>
          <p><strong>Magnitud:</strong> {{ quake.properties.mag }}</p>
          <p>
            <strong>Fecha:</strong>
            {{ new Date(quake.properties.time).toLocaleString() }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EarthquakeMap from '../components/EarthquakeMap.vue';
import { fetchEarthquakes } from '../services/earthquakeApi';

export default {
  components: { EarthquakeMap },
  data() {
    return {
      earthquakes: [], // Lista completa de terremotos
      selectedEarthquake: null, // Terremoto seleccionado
    };
  },
  computed: {
    limitedEarthquakes() {
      return this.earthquakes.slice(0, 20); // Limita la lista a los últimos 20 terremotos
    },
  },
  async mounted() {
    const data = await fetchEarthquakes('2023-01-01', 4.5); // Llama a la API para obtener datos
    this.earthquakes = data.sort((a, b) => b.properties.time - a.properties.time); // Orden descendente por fecha
  },
  methods: {
    selectEarthquake(quake) {
      this.selectedEarthquake = quake; // Actualiza el terremoto seleccionado
    },
  },
};
</script>

<style scoped>
/* No se requieren estilos adicionales ya que el diseño se maneja con clases de TailwindCSS */
</style>
