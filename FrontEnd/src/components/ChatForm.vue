<template lang="pug">
  form.chat-form(@submit.prevent="handleSubmit")
    .chat-form__input-wrap
      input.chat-form__input(v-model="message")
    button.chat-form__btn.btn.btn--rnd
</template>

<script>
import { NEW_MESSAGE } from '@/consts'

export default {
  name: 'ChatForm',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleSubmit () {
      this.$socket.emit(NEW_MESSAGE, { message: this.message })
    }
  }
}
</script>

<style scoped>

</style>
