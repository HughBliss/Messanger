<template>
  <div class="template">
    <Header :name.sync="name"></Header>
    <NickChanger @onNickChange="newName"></NickChanger>
    <ChatWindow :name.sync="name"></ChatWindow>
  </div>
</template>

<script>
import Header from '@/components/Header'
import NickChanger from '@/components/NickChanger'
import ChatWindow from '@/components/ChatWindow'

export default {
  name: 'Home',
  components: {
    Header,
    NickChanger,
    ChatWindow
  },
  data: function () {
    return {
      name: 'User'
    }
  },
  methods: {
    newName (name) {
      if (name) {
        this.name = this.capitalizeFirstLetter(name)
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 5px;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

.template {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
