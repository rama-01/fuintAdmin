import Vue from 'vue'
import App from './App.vue'

// import tailwind stylesheets
import "./styles/tailwind.css"

// import vue-router
import router from '@/router'

// import vuex
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
