import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Algorithms from './components/Algorithms'

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
});

router.map({
  '/algorithms': {
    component: Algorithms,
    isDefault: true
  }
});

router.redirect({
  '/': '/algorithms'
});

router.start(App, "#app");
