<template>
  <div>
    <div v-for="(alg, index) in algorithms">
      <algorithm :algorithm="alg"></algorithm>

      <hr v-if="index != algorithms.length - 1" />
    </div>
  </div>
</template>

<script>
import Algorithm from "./Algorithm"
import algorithms from "../algorithms"

export default {
  components: {
    Algorithm
  },
  data() {
    return {
      algorithms: algorithms
    }
  }
}
</script>
