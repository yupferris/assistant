<template>
  <div v-show="show">
    <form>
      <div class="offset-by-three six columns">
      <label for="theme">Theme</label>
      <select v-model="currentTheme" id='theme'>
        <option v-for="theme in availableThemes" v-bind:value="theme">
          {{ theme }}
        </option>
      </select>
    </div>
    </form>
  </div>
</template>

<script>
import Themes from '../Themes'

export default {
  props: ['show'],
  data() {
    return {
      availableThemes: Themes.availableThemes,
      currentTheme: Themes.currentTheme()
    }
  },
  watch: {
    currentTheme() {
      Themes.setTheme(this.currentTheme)
      this.$emit('changeTheme', this.currentTheme)
    }
  }
}
</script>
