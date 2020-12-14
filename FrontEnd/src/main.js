import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

import '@/assets/scss/main.scss'

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.VUE_APP_WS,
  vuex: {
    store,
    actionPrefix: 'WS_',
    mutationPrefix: 'WS_'
  }
}))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
