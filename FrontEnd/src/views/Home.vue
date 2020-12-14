<template lang="pug">
  .container
    ScreenTitle(title="Заголовок")
    Chat
    ChatForm
</template>

<script>
import ChatForm from '@/components/ChatForm'
import ScreenTitle from '@/components/ScreenTitle'
import Chat from '@/components/Chat'

export default {
  name: 'Home',
  components: {
    ScreenTitle,
    ChatForm,
    Chat
  },
  methods: {}
}
</script>
