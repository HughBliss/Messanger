<template>
  <div>
    <button
      v-if="!showChangeForm"
      @click="showChangeForm = true"
      class="changeText">Изменить
    </button>
    <form
      v-if="showChangeForm"
      class="inpChangeName"
      @submit.prevent="changeNick"
    >
      <input type="text"
             class="inpChangeName__input"
             v-model="newNick"
             ref="inp"
             placeholder='"Enter" для изменения'>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NickChanger',
  data () {
    return {
      showChangeForm: false,
      newNick: ''
    }
  },
  methods: {
    changeNick () {
      this.$emit('onNickChange', this.newNick)
      this.newNick = ''
      this.showChangeForm = false
    }
  }
}
</script>

<style scoped>
.changeText {
  color: inherit;
}

.changeText:hover {
  color: red;
}

.inpChangeName {
  display: flex;
}

.inpChangeName__input {
  height: 24px;
  width: 180px
}
</style>
