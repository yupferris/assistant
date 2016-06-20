<template>
  <algorithm-practice algorithm-type="pll" :show="show"></algorithm-practice>
</template>

<script>
import AlgorithmPractice from "./AlgorithmPractice"

export default {
  components: {
    AlgorithmPractice
  },
  props: ["show"],
  data() {
    return {
    }
  }
}
</script>
