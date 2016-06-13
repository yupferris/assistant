<template>
  <div class="row">
    <div class="one column">
      <p><b>{{algorithm.name}}</b></p>
    </div>

    <div class="two columns">
      <img :src="'static/' + algorithm.imageFileName" />
    </div>

    <div class="nine columns">
      <pre><code>{{algorithm.moves}}</code></pre>
      <p>{{algorithm.comments}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["algorithm"],
  data () {
    return {
    }
  }
}
</script>
