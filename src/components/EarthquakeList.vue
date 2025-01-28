<template>
  <div class="p-4 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Últimos Terremotos</h2>
    <ul class="space-y-2">
      <li v-for="earthquake in earthquakes" :key="earthquake.id" class="p-4 bg-gray-100 rounded shadow">
        <strong>{{ earthquake.properties.place }}</strong>
        <p>Magnitud: {{ earthquake.properties.mag }}</p>
        <p>Fecha: {{ new Date(earthquake.properties.time).toLocaleString() }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    earthquakes: {
      type: Array,
      required: true,
    },
  },
};
</script>
