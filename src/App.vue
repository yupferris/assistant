<template>
  <div class="container">
    <link rel="icon" type="image/png" href="static/favicon.png">
    <link :href="'static/' + currentTheme + '.css'" rel="stylesheet" type="text/css">
    <div id='header' class="row">
      <div class="one column">
        <img src="./assets/kurisu.gif">
      </div>

      <div class="eleven columns">
        <h1>assistant</h1>
      </div>
    </div>

    <hr />

    <div class="row">
      <div id='nav' class="two-half column">
        <a id='nav-standard-solve' class="button">standard solving</a>
        <a class="button button-primary" v-on:click="navigate('oll-practice')">oll practice</a>
        <a class="button button-primary" v-on:click="navigate('pll-practice')">pll practice</a>
        <a class="button button-primary" v-on:click="navigate('algorithms')">algorithms</a>
        <a class="button button-primary" v-on:click="navigate('settings')">settings</a>
      </div>
    </div>

    <hr />

    <oll-practice :show="currentView === 'oll-practice'"></oll-practice>

    <pll-practice :show="currentView === 'pll-practice'"></pll-practice>

    <div v-show="currentView === 'algorithms'">
      <algorithms></algorithms>
    </div>

    <settings v-on:changeTheme="changeTheme" :show="currentView === 'settings'"></settings>
  </div>
</template>

<script>
import OllPractice from './components/OllPractice'
import PllPractice from './components/PllPractice'
import Algorithms from './components/Algorithms'
import Settings from './components/Settings'
import Themes from './Themes'

export default {
  components: {
    OllPractice,
    PllPractice,
    Algorithms,
    Settings
  },
  data() {
    return {
      currentView: "algorithms",
      currentTheme: Themes.currentTheme()
    };
  },
  methods: {
    changeTheme: function(theme) {
      this.currentTheme = theme;
    },
    navigate: function(view) {
      this.currentView = view;
    }
  }
}
</script>

<style src="./assets/skeleton.css"></style>
