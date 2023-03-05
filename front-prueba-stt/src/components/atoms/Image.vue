<template>
  <img :src="src" :alt="alt" :width="width" class="w-auto"/>
</template>
<script>
 export default {
  name: "Image",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: NaN
    }
  }
 }
</script>