<template>
  <div class="row">
    <div class="one column">
      <p><b>{{alg.name}}</b></p>
    </div>

    <div class="two columns">
      <img :src="'static/' + alg.imageFileName"></img>
    </div>

    <div class="nine columns">
      <pre><code>{{alg.moves}}</code></pre>
      <p>{{alg.comments}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alg"],
  data () {
    return {
    }
  }
}
</script>
