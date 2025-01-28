<template>
  <div>
    <!-- Título -->
    <section class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-2">Monitoreo de Terremotos</h1>
      <p class="text-gray-600">Consulta los últimos terremotos registrados en tiempo real.</p>
    </section>

    <!-- Contenido principal -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Mapa -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <EarthquakeMap :earthquakes="earthquakes" />
      </div>

      <!-- Lista de terremotos -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Últimos terremotos</h2>
        <ul>
          <li v-for="quake in earthquakes" :key="quake.id" class="mb-4 border-b pb-2 last:border-b-0">
            <p><strong>Lugar:</strong> {{ quake.properties.place }}</p>
            <p><strong>Magnitud:</strong> {{ quake.properties.mag }}</p>
            <p>
              <strong>Fecha:</strong>
              {{ new Date(quake.properties.time).toLocaleString() }}
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import EarthquakeMap from '../components/EarthquakeMap.vue';

import { fetchEarthquakes } from '../services/earthquakeApi';

export default {
  components: { EarthquakeMap },
  data() {
    return {
      earthquakes: [],
    };
  },
  async mounted() {
    const data = await fetchEarthquakes('2023-01-01', 4.5);
    this.earthquakes = data;
  },
};

</script>
