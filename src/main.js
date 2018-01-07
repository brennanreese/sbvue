// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#42a5f5',
    secondary: '#ff7043',
    accent: '#8c9eff',
    error: '#b71c1c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
