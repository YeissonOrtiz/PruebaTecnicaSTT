<template>
  <p class="text-slate-200 text-lg">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    name: "Paragraph",
    props: {
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

<style>
</style>