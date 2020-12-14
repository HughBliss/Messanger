<template lang="pug">
  .chat
    .chat__balloon(
      v-for="(item, index) in chat"
      :key="index"
      :class="{ 'chat__balloon--my': item.my }"
    ) {{ item.message }}
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      chat: [
        {
          time: Date.now(),
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Architecto delectus eius hic iste nisi nostrum, numquam!' +
            'Ad fugiat nihil quibusdam repellendus repudiandae similique ullam.' +
            'Adipisci dolorum eius expedita nihil officiis.',
          my: true
        }, {
          time: Date.now(),
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Architecto delectus eius hic iste nisi nostrum, numquam!' +
            'Ad fugiat nihil quibusdam repellendus repudiandae similique ullam.' +
            'Adipisci dolorum eius expedita nihil officiis.',
          my: false
        }, {
          time: Date.now(),
          message: 'Lorem ipsum dolor sit amet, ',
          my: true
        }, {
          time: Date.now(),
          message: 'Lorem ipsum dolor sit amet, consectetur ',
          my: false
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
