let mutations = {
  updateTodaySteps(state, payload) {
    state.todaySteps = payload;
  },
  addStep(state, payload) {
    state.todaySteps.push(payload);
  },
  updateTimerId(state, payload) {
    state.timerId = payload;
  }
}

export default mutations;