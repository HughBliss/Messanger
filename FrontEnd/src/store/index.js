import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_MESSAGE, WSA_NEW_MESSAGE } from '@/consts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hist: []
  },
  mutations: {
    [ADD_MESSAGE]: (state, message) => {
      state.hist.push(message)
    }
  },
  actions: {
    [WSA_NEW_MESSAGE] ({ commit }, message) {
      commit(ADD_MESSAGE, message)
    }
  }
  // modules: {}
})
