<template>
  <div v-show="show">
    <div class="row">
      <div class="twelve columns">
        <div align="center">
          <img v-if="currentAlgorithm" width="228" height="228" :src="'static/' + currentAlgorithm.imageFileName" style="-ms-interpolation-mode: nearest-neighbor; image-rendering: -webkit-optimize-contrast; image-rendering: -webkit-crisp-edges; image-rendering: -moz-crisp-edges; image-rendering: -o-crisp-edges; image-rendering: pixelated;" />
          <div v-if="!currentAlgorithm" style="display: inline-block; width: 228px; height: 228px"></div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="twelve columns">
        <div align="center">
          <h4>{{displayText}}</h4>
        </div>

        <algorithm v-if="showAlgorithm" :algorithm="currentAlgorithm"></algorithm>
      </div>
    </div>
  </div>
</template>

<script>
import algorithms from "../algorithms"
import Algorithm from "./Algorithm"

// Makeshift enum :)
const idle = 1;
const countdown = 2;
const running = 3;

export default {
  components: {
    Algorithm
  },
  props: ["algorithmType", "show"],
  data() {
    return {
      currentAlgorithm: null,
      displayText: "ready",
      showAlgorithm: false,

      state: idle,
      startTime: 0,
      interval: 0
    }
  },
  computed: {
    algorithms() {
      return algorithms.filter(x => x.type == this.algorithmType);
    }
  },
  methods: {
    space() {
      const self = this;

      switch (self.state) {
        case idle:
          self.state = countdown;
          self.currentAlgorithm = null;
          self.showAlgorithm = false;
          self.displayText = "3";
          setTimeout(() => {
            self.displayText = "2";
            setTimeout(() => {
              self.currentAlgorithm = self.algorithms[Math.floor(Math.random() * self.algorithms.length)];
              self.displayText = "1";
              setTimeout(() => {
                self.state = running;
                self.startTime = Date.now();
                self.interval = setInterval(() => {
                  const elapsed = new Date(Date.now() - self.startTime);
                  self.displayText = elapsed.getSeconds() + "." + elapsed.getMilliseconds();
                }, 0);
              }, 1000);
            }, 1000);
          }, 1000);
          break;

        case running:
          self.state = idle;
          clearInterval(self.interval);
          self.showAlgorithm = true;
          break;
      }
    },
    keydown(e) {
      if (e.keyCode === 32) {
        this.space();
      }
    }
  },
  watch: {
    "show": function(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      if (val) {
        window.addEventListener("keydown", this.keydown);
      } else {
        window.removeEventListener("keydown", this.keydown);
      }
    }
  }
}
</script>
