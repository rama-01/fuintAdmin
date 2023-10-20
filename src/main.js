import Vue from 'vue'
import App from './App.vue'

// import tailwind stylesheets
import "./styles/tailwind.css"

// import vue-router
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
