<template>
  <div class="w-full md:w-4/5 flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-around p-5">
    <Heading tag="h2" class="font-bold text-center">Rick And Morty Visualizer</Heading>
    <nav>
      <ol class="list-none">
        <li>
          <RouterLink to="/" class="text-slate-200 bg-transparent border-2 rounded-xl inline-block px-4 py-2 w-max">Home</RouterLink>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
  import Heading from '../atoms/Heading.vue';
  import Link from '../atoms/Link.vue';
  import { RouterLink, RouterView } from 'vue-router'

  export default {
    name: "NavBar",
    components: {
      Heading,
      Link
    },
    props: {}
  }
</script>