<template>
  <form @submit.prevent="saveComment" class="flex flex-col gap-5 mb-5 w-full">
    <label class="flex flex-wrap text-white text-bold text-xl w-full">
      Usuario:
      <input type="text" class="rounded-md text-black px-2 w-full" maxlength="100" required v-model="data.comment_owner" />
    </label>
    <label class="flex flex-col text-white text-bold text-xl w-full">
      Comentario:
      <textarea class="rounded-md text-black px-2 resize-none h-32" maxlength="100" required v-model="data.comment"></textarea>
    </label>
    <button type="submit" class="rounded bg-green-600 w-fit px-5 py-2">Submit</button>
  </form>
</template>
<script>
import { handleSubmit } from '../../data/apiLocal'

export default {
  name: "FormSendComment",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      data: {
        "comment": "",
        "comment_owner": "",
        "character_id": Number(this.$route.params.id)
      },
    }
  },
  methods: {
    async saveComment(){
      const response = await handleSubmit(this.id, this.data)
      return this.reloadPage()
    },
    reloadPage() {
      window.location.reload();
    },
  }
}
</script>
