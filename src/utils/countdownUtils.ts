/**
 * Countdown calculations in Asia/Kolkata timezone
 */

export interface CountdownState {
  status: 'before' | 'during' | 'after';
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  formattedTarget: string;
}

// 2026-10-22 00:00:00 in Asia/Kolkata (+05:30) is 2026-10-21 18:30:00 UTC
export const BIRTHDAY_START_UTC = new Date('2026-10-21T18:30:00.000Z').getTime();
// 2026-10-22 23:59:59.999 in Asia/Kolkata (+05:30) is 2026-10-22 18:29:59.999 UTC
export const BIRTHDAY_END_UTC = new Date('2026-10-22T18:29:59.999Z').getTime();

export function calculateCountdown(customNowMs?: number): CountdownState {
  const now = customNowMs ?? Date.now();

  if (now > BIRTHDAY_END_UTC) {
    return {
      status: 'after',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      formattedTarget: '22 October 2026',
    };
  }

  if (now >= BIRTHDAY_START_UTC && now <= BIRTHDAY_END_UTC) {
    return {
      status: 'during',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      formattedTarget: 'Today! 22 October 2026',
    };
  }

  // Before birthday
  const diff = BIRTHDAY_START_UTC - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    status: 'before',
    days: Math.max(0, days),
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    formattedTarget: '22 October 2026, 00:00 IST',
  };
}
