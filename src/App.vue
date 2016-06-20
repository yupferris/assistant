<template>
  <div class="container">
    <div class="row" style="margin-top: 10%">
      <div class="one column">
        <img src="./assets/kurisu.gif">
      </div>

      <div class="eleven columns">
        <h1>assistant</h1>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="twelve columns">
        <a class="button">standard solving</a>
        <a class="button button-primary" v-on:click="navigate('oll-practice')">oll practice</a>
        <a class="button button-primary" v-on:click="navigate('pll-practice')">pll practice</a>
        <a class="button button-primary" v-on:click="navigate('algorithms')">algorithms</a>
      </div>
    </div>

    <hr />

    <oll-practice :show="currentView === 'oll-practice'"></oll-practice>

    <pll-practice :show="currentView === 'pll-practice'"></pll-practice>

    <div v-show="currentView === 'algorithms'">
      <algorithms></algorithms>
    </div>
  </div>
</template>

<script>
import OllPractice from './components/OllPractice'
import PllPractice from './components/PllPractice'
import Algorithms from './components/Algorithms'

export default {
  components: {
    OllPractice,
    PllPractice,
    Algorithms
  },
  data() {
    return {
      currentView: "algorithms"
    };
  },
  methods: {
    navigate: function(view) {
      this.currentView = view;
    }
  }
}
</script>

<style src="./assets/skeleton.css"></style>
