<template>
  <v-list-item>
      <v-list-item-avatar>
        <!-- :class="[item.iconClass]" -->
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle>{{$moment(item.startTime).format("HH:mm")+" - "}}{{(item.endTime)?$moment(item.endTime).format("HH:mm"):""}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn v-if="!item.endTime" icon @click="$emit('step-stoped')">
          <v-icon>mdi-stop</v-icon>
        </v-btn>
         <v-btn icon @click="$emit('step-remove')">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
</template>
<script>
export default {
  props:{
    item:{
      type: Object,
      default: {}
    }
  }
}
</script>