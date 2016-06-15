<template>
  <div class="row">
    <div class="twelve columns">
      <div align="center">
        <!--img *ngIf="currentAlgorithm" width="228" height="228" src="images/{{currentAlgorithm?.imageFileName}}" style="-ms-interpolation-mode: nearest-neighbor; image-rendering: -webkit-optimize-contrast; image-rendering: -webkit-crisp-edges; image-rendering: -moz-crisp-edges; image-rendering: -o-crisp-edges; image-rendering: pixelated;" /-->
        <div v-if="!currentAlgorithm" style="display: inline-block; width: 228px; height: 228px"></div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="twelve columns">
      <div align="center">
        <h4>{{displayValue}}</h4>
      </div>

      <!--algorithm v-if="showAlgorithm" :algorithm="currentAlgorithm"></algorithm-->
    </div>
  </div>
</template>

<script>
import algorithms from "../algorithms"
import Algorithm from "./Algorithm"

export default {
  components: {
    Algorithm
  },
  props: ["algorithmType"],
  data() {
    return {
      algorithms: algorithms.filter(
        x => x.type == this.algorithmType),

      currentAlgorithm: null,
      displayValue: "ready",
      showAlgorithm: false,

      state: "uninitialized",
      startTime: 0,
      interval: 0
    }
  },
  ready() {
    console.log("alg practice ready");
    console.log(" this.algorithms: " + JSON.stringify(this.algorithms));
    console.log(" this.algorithmType: " + this.algorithmType);
  }
}
</script>
