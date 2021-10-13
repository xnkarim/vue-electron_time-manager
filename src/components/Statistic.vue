<template>
  <div class="stats">
    <div class="flex-grow-1">
      <div>Начал</div>
      <div>{{statistic.start}}</div>
    </div>
    <div class="mid-el flex-grow-1">
      <div>Отработал</div>
      <div>{{statistic.work}}</div>
    </div>
    <div class="flex-grow-1">
      <div>Перерыв</div>
      <div>{{statistic.rest}}</div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters(["statistic"]),
  }
}
</script>
<style scoped lang="scss">
.stats {
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  position: fixed;
  top: 73px;
  width: 100%;
  opacity: 1;
  z-index: 10;
  padding: 10px 0;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
.mid-el {
  border: 1px solid #424242;
  border-bottom: 0;
  border-top: 0;
}
</style>