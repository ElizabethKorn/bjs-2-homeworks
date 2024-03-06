class AlarmClock {
  constructor() {
    this.intervalId = null;
    this.alarmCollection = [];
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.find((alarm) => alarm.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    } 

    this.alarmCollection.push({ callback, time, canCall: true });  
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours().toString().padStart(2, "0");
    let minutes = currentDate.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
        alarm.canCall = true
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
