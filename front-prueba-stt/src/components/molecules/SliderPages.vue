<template>
  <div class="flex flex-row justify-between items-center w-full">
    <button @click="previousPage" :disabled="disablePrevious" class="inline-block px-4 py-2 text-white w-max bg-transparent">← Previous</button>
    <div class="text-white"><b>{{ currentPage }} / {{ totalPages }}</b></div>
    <button @click="nextPage" :disabled="disableNext" class="inline-block px-4 py-2 text-white w-max bg-transparent">Next →</button>
  </div>
</template>

<script>
export default {
  name: 'SliderPages',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    disablePrevious: {
      type: Boolean,
      required: true
    },
    disableNext: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    previousPage() {
      this.$emit('previousPage');
    },
    nextPage() {
      this.$emit('nextPage');
    }
  }
};
</script>
