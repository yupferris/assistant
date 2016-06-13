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

    <!--hr />

    <div class="row">
      <div class="twelve columns">
        <a class="button">standard solving</a>
        <a class="button button-primary" href="#">oll practice</a>
        <a class="button button-primary" href="#">pll practice</a>
        <a class="button button-primary" href="#">algorithms</a>
      </div>
    </div-->

    <hr />

    <algorithms></algorithms>
  </div>
</template>

<script>
import Algorithms from './components/Algorithms'

export default {
  components: {
    Algorithms
  }
}
</script>

<style src="./assets/skeleton.css"></style>
