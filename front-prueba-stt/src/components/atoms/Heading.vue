<template>
  <component :is="tag" class="text-3xl font-bold text-slate-200">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: "Heading",
    props: {
      tag: {
        type: String,
        default: "h1",
        validator: (value) => {
          return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
        }
      },
      text: {
        type: String,
        required: true
      }
    }
  };
</script>

<style>
</style>
