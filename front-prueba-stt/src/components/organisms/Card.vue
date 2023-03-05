<template>
  <div class="card flex flex-col items-center gap-5 w-full md:w-2/5 xl:w-1/4 border border-slate-300 px-10 py-5 rounded-xl hover:bg-zinc-800 hover:scale-105 relative">
    <Heading tag="h3" class="text-slate-200 text-3xl">{{ name }}</Heading>
    <Image :src="image_src" alt="Test" width="60" class="rounded"/>
    <b class="text-white cursor-pointer hover:text-green-400" @click="toggleVisible">{{ visibleInfo ? 'Ocultar info' : 'Ver info' }}</b>
    <div class="flex flex-row flex-wrap gap-2" :class="{'hidden': !visibleInfo}">
      <Paragraph><b>Especie:</b> {{ species }}</Paragraph>
      <Paragraph><b>Estado:</b> {{ status }}</Paragraph>
      <Paragraph><b>Genero:</b> {{ gender }}</Paragraph>
      <Paragraph><b>Ubicación:</b> {{ location }}</Paragraph>
      <Paragraph><b>Comentarios:</b> {{ comments }}</Paragraph>
    </div>
    <RouterLink :to="{name: 'character', params: {id: id}}" class="inline-block px-4 py-2 text-white w-max bg-blue-500 rounded hover:bg-blue-600">Ver más</RouterLink>
  </div>
</template>
<script>
import Image from '../atoms/Image.vue';
import Heading from '../atoms/Heading.vue';
import Paragraph from '../atoms/Paragraph.vue';
import Link from '../atoms/Link.vue';
import { RouterLink } from 'vue-router';
import { getAllCommentsByCharacter } from "../../data/apiLocal";

export default {
  name: "Card",
  components: {
  Image,
  Link,
  Paragraph
  },
  data() {
    return {
      visibleInfo: false,
      comments: 0,
    };
  },
  async mounted() {
    await this.getCommentsByCharacter(this.id);
  },
  methods: {
    toggleVisible() {
      this.visibleInfo = !this.visibleInfo;
    },
    async getCommentsByCharacter(id) {
      const data = await getAllCommentsByCharacter(id);
      this.comments = data.length;
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image_src: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
  .card{
    min-height: 200px;
    transition: transform 0.2s;
  }
</style>