<template>
  <Image :src="character.image" class="rounded-xl"></Image>
  <div class="info-character flex flex-col gap-5">
    <Heading tag="h1" class="text-white font-bold text-3xl w-full text-left">{{ character.name }}</Heading>
    <div class="characteristics flex flex-row flex-wrap w-full gap-2">
      <Paragraph class="text-white text-xl w-full lg:w-2/5"><b>Species:</b> {{ character.species }}</Paragraph>
      <Paragraph class="text-white text-xl w-full lg:w-2/5"><b>Gender:</b> {{ character.gender }}</Paragraph>
      <Paragraph class="text-white text-xl w-full lg:w-2/5"><b>Status:</b> {{ character.status }}</Paragraph>
      <Paragraph class="text-white text-xl w-full lg:w-2/5" v-if="character.location"><b>Location:</b> {{ character.location.name }}</Paragraph>
    </div>
  </div>
</template>
<script>
import { getOneCharacter } from '../../data/apiRickAndMorty';
import Heading from '../atoms/Heading.vue';
import Paragraph from '../atoms/Paragraph.vue';
import Image from '../atoms/Image.vue';

export default {
  name: "InfoCharacter",
  components: {
    Heading,
    Paragraph,
    Image
  },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      character: {}
    }
  },
  async mounted() {
    await this.characterData()
  },
  methods: {
    async characterData() {
      const data = await getOneCharacter(this.id)
      this.character = data;
    },
  }
}
</script>