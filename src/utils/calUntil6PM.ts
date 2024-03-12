export const calUntil6PM = () => {
  const now = new Date();
  const targetTime = new Date(new Date().setHours(18, 0, 0, 0));

  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  const delayInMilliseconds = Number(targetTime) - Number(now);
  const delayInMinutes = delayInMilliseconds / (1000 * 60);

  return delayInMinutes;
};
