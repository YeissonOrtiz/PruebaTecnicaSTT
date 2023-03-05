<template>
  <section class="flex flex-row flex-wrap justify-between items-center w-4/5 gap-10">
    <SliderPages
      :currentPage="currentPage"
      :totalPages="totalPages"
      :disablePrevious="currentPage === 1"
      :disableNext="currentPage === totalPages"
      @previousPage="previousPage"
      @nextPage="nextPage"
    />
    <!-- Comenté el filter porque me produjo un bug con la paginación que no llegue a resolver -->
    <!-- <div class="flex flex-row flex-wrap justify-between items-center w-4/5 gap-10">
      <div class="flex flex-row flex-wrap gap-2">
        <label for="status" class="text-white">Status:</label>
        <select id="status" class="rounded-md" v-model="selectedStatus">
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div class="flex flex-row flex-wrap gap-2">
        <label for="gender" class="text-white">Gender:</label>
        <select id="gender" class="rounded-md" v-model="selectedGender">
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div class="flex flex-row flex-wrap gap-2">
        <label for="species" class="text-white">Species:</label>
        <select id="species" class="rounded-md" v-model="selectedSpecies">
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Mytholog">Mytholog</option>
          <option value="Robot">Robot</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <button class="px-5 py-2 bg-blue-600 rounded-md font-bold text-white" @click="updateData">Filter</button>
    </div> -->
    <Card v-for="character in characters" :key="character.id" 
      :name="character.name" 
      :image_src="character.image" 
      :link="character.id" 
      :species="character.species" 
      :status="character.status" 
      :gender="character.gender" 
      :location="character.location.name"
      :id="character.id"
    />
  </section>
</template>

<script>
import Card from "../organisms/Card.vue";
import { getAllCharacters } from "../../data/apiRickAndMorty";
import SliderPages from "../molecules/SliderPages.vue";

export default {
  name: "CardsContainer",
  components: { Card, SliderPages },
  data() {
    return {
      characters: [],
      currentPage: 1,
      // totalPages: null,
      // selectedStatus: '',
      // selectedGender: '',
      // selectedSpecies: ''
    };
  },
  async mounted() {
    await this.updateData();
  },
  methods: {
    async updateData(page = 1) {
      const params = {
        page,
        // status: this.selectedStatus,
        // gender: this.selectedGender,
        // species: this.selectedSpecies,
      };
      const data = await getAllCharacters(params);
      this.characters = data.results;
      this.totalPages = data.info.pages;
      this.currentPage = page;
    },
    async previousPage() {
      await this.updateData(--this.currentPage);
    },
    async nextPage() {
      await this.updateData(++this.currentPage);
    },
  },
};
</script>
