<template>
  <div class="header">Ваше имя:
    <span class="header__name">"{{ name }}"</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  justify-content: center;
}

.header__name {
  color: blue;
}
</style>
