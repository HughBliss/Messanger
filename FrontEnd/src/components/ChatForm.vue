<template lang="pug">
  form.chat-form(@submit.prevent="handleSubmit")
    input.chat-form__input(v-model="message")
    button.chat-form__btn
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
