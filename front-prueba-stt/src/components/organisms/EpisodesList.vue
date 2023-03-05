<template>
  <div>
    <Heading tag="h4" class="text-white text-2xl hover:cursor-pointer mb-2 pb-2" @click="toggleVisibleEpisodes">{{ visibleEpisodes ? 'Ocultar episodios' : 'Mostrar episodios' }}</Heading>
    <ol :class="{'hidden': !visibleEpisodes}">
      <li v-for="episode in episodes" class="text-white text-xl text-left"><b>Episodio: </b>{{ episode.split("/").pop() }}</li>
    </ol>
  </div>
</template>

<script>
import Heading from '../atoms/Heading.vue';
import { getOneCharacter } from '../../data/apiRickAndMorty';

export default {
  name: "EpisodesList",
  components: { Heading },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      visibleEpisodes: false,
      episodes: []
    }
  },
  async mounted() {
    await this.getEpisodes()
  },
  methods: {
    async getEpisodes(){
      const response = await getOneCharacter(this.id)
      this.episodes = response.episode
    },
    toggleVisibleEpisodes() {
      this.visibleEpisodes = !this.visibleEpisodes;
    }
  }
}
</script>
