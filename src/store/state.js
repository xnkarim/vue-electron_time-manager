let state = {
  seconds: 0,
  isStarted: false,
  todaySteps: [
    {
      icon: "mdi-trending-up",
      iconClass: "grey lighten-1 white--text",
      title: "Работа: что-то там",
      subtitle: "10:20-"
    },
    {
      icon: "mdi-beach",
      iconClass: "grey lighten-1 white--text",
      title: "Перерыв: обед",
      subtitle: "11:00-"
    },
    {
      icon: "mdi-trending-up",
      iconClass: "grey lighten-1 white--text",
      title: "Работа: статистика",
      subtitle: "12:00-"
    }
  ],
  statistic:{
    start: "9:30",
    work: "2:24",
    rest: "2:44",
  }
}

export default state;