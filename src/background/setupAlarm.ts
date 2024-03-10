import { calUntil6PM } from './calUntil6PM';

export const setupAlarm = () => {
  chrome.alarms.create('daily6PMAlarm', {
    delayInMinutes: calUntil6PM(),
    periodInMinutes: 1440, // 24시간 * 60분 = 1440분
  });
};
