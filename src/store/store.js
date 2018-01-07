import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    drawer: false,
    dark: false
  },
  getters: {
    drawer: function (state) {
      return state.drawer
    },
    dark: function (state) {
      return state.dark
    }
  },
  mutations: {
    drawer: function (state) {
      state.drawer = !state.drawer
    },
    dark: function (state) {
      state.dark = !state.dark
    }
  },
  actions: {
    toggleDrawer: function (context) {
      context.commit('drawer')
    },
    toggleDark: function (context) {
      context.commit('dark')
    }
  }
})
