export const calRemainMinutes = (now: Date, targetTime: Date) => {
  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  const delayInMilliseconds = Number(targetTime) - Number(now);
  const delayInMinutes = delayInMilliseconds / (1000 * 60);

  return delayInMinutes;
};
