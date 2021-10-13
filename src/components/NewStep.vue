<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" fixed x-small dark color="primary" fab top left class="float-btn">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Добавить</v-card-title>
      <v-card-text>
        <v-col cols="12">
          <v-autocomplete
            v-model="selected.type"
            :items="types"
            item-text="name"
            item-value="id"
            label="Тип"
          ></v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="selected.note" label="Note"></v-text-field>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
        <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
        <!-- :disabled="!valid"  -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
// const storage = require("electron-json-storage");
const fs = require("fs");
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    selected: {
      type: null,
      note: ""
    },
    types: [
      {
        id: 1,
        name: "Работа"
      },
      {
        id: 2,
        name: "Перерыв"
      }
    ]
  }),
  computed: {
    ...mapGetters(["todayStepsLength"])
  },
  methods: {
    ...mapActions(["addStep"]),

    resetForm() {
      this.selected = {
        type: null,
        note: ""
      };
    },
    close() {
      this.resetForm();
      this.dialog = false;
    },
    save() {
      let icon = this.selected.type === 1 ? "mdi-trending-up" : "mdi-beach";
      let name = this.types.find(el => el.id == this.selected.type).name;
      let time = this.$moment().format("HH:mm");
      let newStep = {
        id: this.todayStepsLength + 1,
        isActive: true,
        startTime: +new Date(),
        endTime: null,
        icon,
        type: this.selected.type,
        title: `${name}:${this.selected.note}`,
        subtitle: `${time}-`
      };
      this.addStep(newStep);
      this.$emit('add-step');
      this.close();
    }
  }
};
</script>
<style lang="scss">
.float-btn {
  top: 55px !important;
  z-index: 123 !important;
}
</style>