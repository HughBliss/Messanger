<template>
  <div class="home">
    <button @click="testMessage">test message</button>
  </div>
</template>

<script>

import { NEW_MESSAGE } from '@/consts'

export default {
  name: 'Home',
  components: {},
  methods: {
    testMessage () {
      this.$socket.emit(NEW_MESSAGE, { message: 'test' })
    }
  }
}
</script>
