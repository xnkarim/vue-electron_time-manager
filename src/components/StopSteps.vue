<template>
  <v-btn @click="stopSteps" x-large icon color="primary">
    <v-icon>mdi-bell-ring-outline</v-icon>
  </v-btn>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods:{
    ...mapActions(["stopSteps"])
  }
};
</script>