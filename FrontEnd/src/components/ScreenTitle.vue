<template lang="pug">
  .header
    h1.header__title {{ title }}
    button.header__pop-btn.btn.btn--rnd
</template>

<script>
export default {
  name: 'ScreenTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
