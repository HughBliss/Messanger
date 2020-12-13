import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3030',
  vuex: {
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options: { path: '/my-app/' }
}))

new Vue({
  render: h => h(App)
}).$mount('#app')
