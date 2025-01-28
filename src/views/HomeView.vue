<template>
  <div class="container mx-auto p-4">
    <FilterMap @filter-changed="fetchData" />
    <EarthquakeMap :earthquakes="earthquakes" />
    <EarthquakeList :earthquakes="earthquakes" />
  </div>
</template>

<script>
import { fetchEarthquakes } from '../services/earthquakeApi';
import EarthquakeMap from '../components/EarthquakeMap.vue';
import EarthquakeList from '../components/EarthquakeList.vue';
import FilterMap from '../components/FilterMap.vue';

export default {
  name: 'HomeView',
  components: { EarthquakeMap, EarthquakeList, FilterMap },
  data() {
    return {
      earthquakes: [],
    };
  },
  methods: {
    async fetchData({ startDate, minMagnitude }) {
      this.earthquakes = await fetchEarthquakes(startDate, minMagnitude);
    },
  },
  mounted() {
    this.fetchData({ startDate: '2023-01-01', minMagnitude: 4.5 });
  },
};
</script>
