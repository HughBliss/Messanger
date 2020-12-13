<template>
  <div class="chatWindow">
    <div class="listOfMessage" ref="listMessage">
      <ul>
        <li v-for="item in items" :key="item.message">
          <strong style="padding: 0">{{ name }}: </strong> {{ item.message }}
        </li>
      </ul>
    </div>
    <form
      class="newMessageInput"
      @submit.prevent="newItem"
    >
      <input v-model="inputValue" type="text" class="form-control "
             placeholder="Ваше сообщение">
      <div class="input-group-append">
        <button class="btn btn-outline-primary" type="submit">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChatWindow',
  props: {
    name: String
  },
  data () {
    return {
      items: [{ message: 'Привет' }],
      inputValue: ''

    }
  },
  methods: {
    newItem () {
      if (this.inputValue) {
        this.items.push({ message: this.inputValue })
        this.inputValue = ''
        this.$refs.listMessage.scrollTo(0, 999999)
      }
    }
  }
}
</script>

<style scoped>

.chatWindow {
  border: 1px solid black;
  height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.newMessageInput {
  margin-top: auto;
  align-self: end;
  width: 100%;
}

.listOfMessage {
  height: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
}

a {
  color: red;
}

.newMessageInput {
  flex-direction: row;
  display: flex;
}

.newMessageInput > input {
  width: 90%;
  display: block;
}

.newMessageInput > button {
  width: 10%;
  height: 30px;
}

</style>
