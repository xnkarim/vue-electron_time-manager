<template>
  <div id="clock">
    <p class="time">{{ time }}</p>
    <stop-steps />
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import StopSteps from "./StopSteps.vue";
import { format } from "@/helpers/helpers";
export default {
  name: "stopwatch",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    StopSteps
  },
  data: () => ({
    seconds: 0,
    time: format(0, true),
    date: "",
    week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    timerId: null,
  }),
  mounted() {
  },
  watch: {
    isActive: function(newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      if (newVal) this.start();
      else this.stop();
    }
  },
  methods: {
    ...mapMutations(["updateTimerId"]),
    updateTime() {
      var cd = new Date();
      this.seconds += 1;
      this.time = format(this.seconds * 1000, true);
    },
    start() {
      console.log('started');
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
      this.updateTime();
    },
    stop() {
      console.log('stoped');
      this.seconds = 0;
      clearInterval(this.timerId);
      this.time = format(0, true);
    },
    formatter(num) {
      return num >= 10 ? num : "0" + num;
    }
  }
};
</script>
<style lang="scss" scoped>
#clock {
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  position: fixed;
  width: 100%;
  background: #0f3854;
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
  z-index: 100;
  .time {
    letter-spacing: 0.05em;
    font-size: 48px;
    margin-bottom: 0;
    padding: 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
  .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
}
</style>