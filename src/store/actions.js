let actions = {
  addStep({ state, commit, dispatch }, payload) {
    commit('addStep', payload);
    dispatch("updateEndTime");
  },
  updateEndTime({ state, commit }) {
    let length = state.todaySteps.length;
    if (length > 1) {
      let prevEl = state.todaySteps[length - 2];
      if (prevEl.endTime === null) {
        prevEl.endTime = state.todaySteps[length - 1].startTime;
        prevEl.isActive = false;
      }
    }
  },
  stopSteps({state}){
    let length = state.todaySteps.length;
    if (length > 0) {
      state.todaySteps[length - 1].endTime = +new Date();
      state.todaySteps[length - 1].isActive = false;
    }
  }
}

export default actions;