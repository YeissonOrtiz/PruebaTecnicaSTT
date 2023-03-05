<template>
  <div class="flex flex-col w-full">
    <Heading tag="h4" class="text-white text-2xl mb-2 pb-2 w-full">User comments</Heading>
    <div class="flex flex-col rounded border-2 p-5 w-full mb-2" v-for="comment in comments">
      <span class="text-white text-base">{{ comment.comment_owner }}</span>
      <Paragraph class="text-white text-2xl">{{ comment.comment }}</Paragraph>
    </div>
  </div>
</template>
<script>
import Heading from '../atoms/Heading.vue'
import { getAllCommentsByCharacter } from '../../data/apiLocal'

export default {
  name: "CommentsCharacter",
  components: { Heading },
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  data(){
    return {
      comments: []
    }
  },
  async mounted() {
    await this.getComments()
  },
  methods: {
    async getComments(){
      const characterComments = await getAllCommentsByCharacter(this.id)
      this.comments = characterComments
    },
  }
}
</script>