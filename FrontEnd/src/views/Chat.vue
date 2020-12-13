<template>
  <div class="template" @load="pressEnter()" v-on:keydown="pressEnter()">
    <div class="header">Ваше имя: <span style="color: blue">"{{ name }}"</span></div>
    <p v-if="!changeNick" @click="changeNick = true" class="changeText">Изменить</p>
    <div v-if="changeNick" class="inpChangeName">
      <input type="text" style="height: 24px; width: 180px" autofocus ref="inp" placeholder='"Enter" для изменения'>
    </div>
    <div class="chatWindow" @click="isModalOpen = false" ref="chat">
      <div class="listOfMessage" ref="listMessage">
        <ul>
          <li v-for="item in items" :key="item.message">
            <strong style="padding: 0">{{ name }}: </strong> {{ item.message }}
          </li>
        </ul>
      </div>
      <div class="newMessageInput">
        <input v-model="inputValue" style="padding-left: 10px" type="text" class="form-control" placeholder="Ваше сообщение">
        <div class="input-group-append">
          <button class="btn btn-outline-primary" @click="newItem" type="button">Отправить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data: function () {
    return {
      items: [{ message: 'Привет' }],
      inputValue: ' ',
      name: 'User',
      changeNick: false
    }
  },
  methods: {
    newItem: function () {
      if (this.inputValue !== '') {
        this.items.push({ message: this.inputValue })
        this.inputValue = ''
        this.$refs.listMessage.scrollTo(0, 999999)
      }
    },
    newName: function () {
      if (this.$refs.inp.value !== '') {
        this.name = this.$refs.inp.value.slice(0, 1).toUpperCase() + this.$refs.inp.value.slice(1)
      }
      this.changeNick = false
    },
    pressEnter: function () {
      if (event.key === 'Enter') {
        if (!this.changeNick) {
          this.newItem()
          this.inputValue = ''
        } else {
          this.newName()
        }
      }
    }
  }
}
</script>

<style scoped>
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

.chatWindow {
  border: 1px solid black;
  height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  justify-content: center;
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

.changeText:hover {
  color: red;
}

.newMessageInput {
  flex-direction: row;
  display: flex;
}

.newMessageInput>input {
  width: 90%;
  display: block;
}

.newMessageInput>button {
  width: 10%;
  height: 30px;
}

.inpChangeName {
  display: flex;
}
</style>
