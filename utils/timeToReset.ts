import { intervalToDuration, formatDuration } from 'date-fns';

export const getTimersUntilReset = (now: Date) => {
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  // day 0 of the next month is the last day of current monthw
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const date = now.getUTCDate();
  const day = now.getUTCDay();

  const monthEnd = new Date(Date.UTC(year, month, daysInMonth, 24));
  const weekEnd = new Date(Date.UTC(year, month, 7, 24));
  const dayEnd = new Date(Date.UTC(year, month, date, 9));

  const dailyTimer = formatDuration(
    intervalToDuration({
      start: now, end: dayEnd
    }), { delimiter: ', ' });
  const weeklyTimer = formatDuration(
    intervalToDuration({
      start: now, end: weekEnd
    }), { delimiter: ', ' });
  const monthlyTimer = formatDuration(
    intervalToDuration({
      start: now, end: monthEnd
    }), { delimiter: ', ' });

  return {
    dayEnd,
    dailyTimer,
    weekEnd,
    weeklyTimer,
    monthEnd,
    monthlyTimer
  };
};
