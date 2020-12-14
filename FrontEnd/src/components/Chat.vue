<template lang="pug">
  .content
    .chat
      .chat__bubble(
        v-for="(item, index) in hist"
        :key="index"
        :class="{ 'chat__bubble--my': item.my }"
      ) {{ item.message }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Chat',
  computed: {
    ...mapState({
      hist: 'hist'
    })
  },
  data () {
    return {
      // chat: [
      //   {
      //     time: Date.now(),
      //     message: '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      //       'Architecto delectus eius hic iste nisi nostrum, numquam!' +
      //       'Ad fugiat nihil quibusdam repellendus repudiandae similique ullam.' +
      //       'Adipisci dolorum eius expedita nihil officiis.',
      //     my: true
      //   }, {
      //     time: Date.now(),
      //     message: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      //       'Architecto delectus eius hic iste nisi nostrum, numquam!' +
      //       'Ad fugiat nihil quibusdam repellendus repudiandae similique ullam.' +
      //       'Adipisci dolorum eius expedita nihil officiis.',
      //     my: false
      //   }, {
      //     time: Date.now(),
      //     message: '3 Lorem ipsum dolor sit amet, ',
      //     my: true
      //   }, {
      //     time: Date.now(),
      //     message: '4 Lorem ipsum dolor sit amet, consectetur ',
      //     my: false
      //   }
      //   // {
      //   //   time: Date.now(),
      //   //   message: '5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      //   //     'Architecto delectus eius hic iste nisi nostrum, numquam!' +
      //   //     'Ad fugiat nihil quibusdam repellendus repudiandae similique ullam.' +
      //   //     'Adipisci dolorum eius expedita nihil officiis.',
      //   //   my: true
      //   // }, {
      //   //   time: Date.now(),
      //   //   message: '6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      //   //     'Architecto delectus eius hic iste nisi nostrum, numquam!' +
      //   //     'Ad fugiat nihil quibusdam repellendus repudiandae similique ullam.' +
      //   //     'Adipisci dolorum eius expedita nihil officiis.',
      //   //   my: false
      //   // }, {
      //   //   time: Date.now(),
      //   //   message: '7 Lorem ipsum dolor sit amet, ',
      //   //   my: true
      //   // }, {
      //   //   time: Date.now(),
      //   //   message: '8 Lorem ipsum dolor sit amet, consectetur ',
      //   //   my: false
      //   // }
      // ]
    }
  }
}
</script>

<style scoped>

</style>
