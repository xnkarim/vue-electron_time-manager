import Vue from 'vue'
import { format } from '@/helpers/helpers'

let getters = {
  statistic(state, getters) {
    let ts = state.todaySteps;
    if (ts.length === 0) {
      return {
        start: "--:--",
        work: "--:--",
        rest: "--:--",
      }
    } else {
      let startTime = ts[0].startTime;
      let start = Vue.moment(startTime).format("HH:mm");

      let workTime = getters.workTime;
      let restTime = getters.restTime;
      return {
        start,
        work: format(workTime),
        rest: format(restTime),
      }
    }
  },
  todayStepsLength(state) {
    return state.todaySteps.length;
  },
  workTime(state) {
    return state.todaySteps.reduce((sum, current) => {
      if (current.type === 1 && current.endTime){
        sum += (+current.endTime - +current.startTime)
      }
      return sum;
    }, 0);
  },
  restTime(state) {
    return state.todaySteps.reduce((sum, current) => {
      if (current.type === 2 && current.endTime)
        sum += (+current.endTime - +current.startTime)
      return sum;
    }, 0);
  },
}

export default getters;