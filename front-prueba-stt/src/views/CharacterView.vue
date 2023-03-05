<script>
import Heading from '../components/atoms/Heading.vue';
import FormSendComment from '../components/organisms/FormSendComment.vue';
import CommentsCharacter from '../components/organisms/CommentsCharacter.vue';
import EpisodesList from '../components/organisms/EpisodesList.vue';
import InfoCharacter from '../components/organisms/InfoCharacter.vue';

export default {
  name: "CharacterView",
  data() {
    return {
      id: Number(this.$route.params.id),
    }
  },
  components: {
    FormSendComment,
    CommentsCharacter,
    EpisodesList,
    InfoCharacter
}
}
</script>
<template>
  <section class="flex flex-col justify-center items-center">
    <div class="flex flex-col md:flex-row w-4/5 mx-auto justify-center md:items-start px-5 lg:px-20 gap-5 py-10">
      <InfoCharacter
        :id="id"
      />
    </div>
    <div class="flex flex-col px-5 lg:px-20 md:flex-row-reverse justify-center md:justify-between xl:justify-start w-full lg:w-4/5 gap-5">
      <div class="flex flex-col justify-start items-start w-4/5 lg:w-2/5 mx-auto">
        <Heading tag="h3" class="text-white text-2xl hover:cursor-pointer border-b-2 mb-2 pb-2 w-full">Comments</Heading>
        <FormSendComment
          :id="id"
        />
        <CommentsCharacter
          :id="id"
        />
      </div>
      <div class="w-4/5 lg:w-2/5">
        <EpisodesList
          :id="id"
        />
      </div>
    </div>
  </section>
</template>
