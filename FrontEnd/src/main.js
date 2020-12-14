import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import '@/assets/scss/main.scss'
import { WSA_PREF } from '@/consts'

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.VUE_APP_WS,
  vuex: {
    store,
    actionPrefix: WSA_PREF,
    mutationPrefix: 'WSM_'
  }
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
