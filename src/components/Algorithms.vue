<template>
  <template v-for="alg in algorithms">
    <algorithm :algorithm="alg"></algorithm>

    <hr v-if="$index != algorithms.length - 1" />
  </template>
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
