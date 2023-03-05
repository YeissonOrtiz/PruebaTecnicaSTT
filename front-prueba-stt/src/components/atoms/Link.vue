<template>
  <a :href="cta_link" class="inline-block px-4 py-2 text-white w-max " :class="{
    'bg-blue-500 rounded hover:bg-blue-600': color_button === 'blue', 'bg-red-500 rounded hover:bg-red-600':
    color_button === 'red' , 'bg-transparent': color_button === 'transparent' }">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    cta_link: {
      type: String,
      required: true,
    },
    cta_text: {
      type: String,
      required: true,
    },
    color_button: {
      type: String,
      default: "blue",
      validator: (value) => {
        return ["blue", "red", "transparent"].includes(value);
      },
    },
  },
};
</script>

<style></style>
