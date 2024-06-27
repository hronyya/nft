import {
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

export function formatDuration(start: Date, end: Date): string {
  const days = differenceInDays(end, start);
  const hours = differenceInHours(end, start) - days * 24;
  const minutes = differenceInMinutes(end, start) - (days * 24 + hours) * 60;

  return `${days}d ${format(new Date(0, 0, 0, hours), 'HH')}h ${format(new Date(0, 0, 0, 0, minutes), 'mm')}m`;
}

// Example usage
const startDate = new Date('2024-06-25T00:00:00');
const endDate = new Date('2024-06-26T07:11:00');
