import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

router.start(App, "#app");
