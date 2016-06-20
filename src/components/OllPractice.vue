<template>
  <algorithm-practice algorithm-type="oll" :show="show"></algorithm-practice>
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
