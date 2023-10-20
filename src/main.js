import Vue from "vue";
import App from "./App.vue";

// import tailwind stylesheets
import "./styles/tailwind.css";

// import vue-router
import router from "@/router";

// import vuex
import store from "@/store";

// 按需引入element-ui
import "@/plugins/element-ui";

// import axios interceptors
import service from "@/utils/request";

console.log(service);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
