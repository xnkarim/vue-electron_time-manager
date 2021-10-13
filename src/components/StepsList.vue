<template>
  <v-list class="steps-list" two-line subheader>
    <step 
    @step-stoped="$emit('step-stoped')" 
    @step-remove="$emit('step-remove',i)" 
    v-for="(item,i) in steps" 
    :item="item" 
    :key="item.title+item.id" />
  </v-list>
</template>
<script>
import { mapState } from "vuex";
import Step from "./Step";

export default {
  props:{
    steps:{
      type:Array,
      default: []
    }
  },
  components: {
    Step
  },
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.steps-list {
  max-height: 100%;
  overflow-y: scroll;
  margin-top: 141px;
  margin-bottom: 56px;
  min-height: 287px;
  border-radius: unset !important;
}
</style>