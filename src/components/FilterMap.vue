<template>
  <div class="flex items-center gap-4">
    <input v-model="startDate" type="date" class="border rounded p-2" />
    <input v-model.number="minMagnitude" type="number" placeholder="Magnitud mínima" class="border rounded p-2" />
    <button @click="applyFilters" class="bg-primary text-white rounded p-2">
      Aplicar
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterMap',
  data() {
    return {
      startDate: '',
      minMagnitude: 4.5,
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter-changed', {
        startDate: this.startDate,
        minMagnitude: this.minMagnitude,
      });
    },
  },
};
</script>
