<template>
  <v-app>
    <!-- <v-app-bar id="toolbar" app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Time-manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>-->
    <v-content class="content">
      <stopwatch :isActive="isActive" />
      <statistic />
      <steps-list :steps="todaySteps" @step-remove="stepRemove($event)" @step-stoped="stepStoped" />
      <new-step ref="newStep" @add-step="stepAdded" />
    </v-content>
    <!-- <bottom-navigation /> -->
  </v-app>
</template>

<script>
import Stopwatch from "@/components/Stopwatch.vue";
import BottomNavigation from "@/components/BottomNavigation.vue";
import StepsList from "@/components/StepsList.vue";
import Statistic from "@/components/Statistic.vue";
import NewStep from "@/components/NewStep.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  created() {
    let steps = JSON.parse(localStorage.getItem("steps"));
    let today = this.$moment().format("DD/MM/YY");
    if (steps && steps[today]) {
      this.updateTodaySteps(steps[today]);
    } else this.updateTodaySteps([]);
  },
  components: {
    Stopwatch,
    BottomNavigation,
    StepsList,
    Statistic,
    NewStep
  },
  data: () => ({
    isActive: false
  }),
  computed: {
    ...mapState(["todaySteps"])
  },
  methods: {
    ...mapMutations(["updateTodaySteps"]),
    stepAdded() {
      this.saveToStorage();
      this.isActive = true;
    },
    stepStoped() {
      this.saveToStorage();
      this.isActive = false;
      this.$refs.newStep.dialog = true;
    },
    stepRemove(index) {
      this.saveToStorage();
      this.todaySteps.splice(index, 1);
    },
    saveToStorage() {
      const key = this.$moment().format("DD/MM/YY");
      const steps = {};
      steps[key] = this.todaySteps;
      localStorage.setItem("steps", JSON.stringify(steps));
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles";
#toolbar {
  -webkit-app-region: drag;
}
::-webkit-scrollbar {
  display: none;
}
html,
body {
  height: 100%;
}
.content,
body {
  // background: #0f3854;
  // background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
}
p {
  margin: 0;
  padding: 0;
}
</style>