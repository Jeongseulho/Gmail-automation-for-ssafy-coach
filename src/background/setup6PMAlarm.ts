import { calRemainMinutes } from '@/utils/calRemainMinutes';

export const setup6PMAlarm = () => {
  const now = new Date();
  const targetTime = new Date(new Date().setHours(18, 0, 0, 0));
  chrome.alarms.create('daily6PMAlarm', {
    delayInMinutes: calRemainMinutes(now, targetTime),
    periodInMinutes: 1440, // 24시간 * 60분 = 1440분
  });
};
