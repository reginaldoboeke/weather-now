interface DateProvider {
  addMinutes(minutes: number, date?: Date): Date;
  diffMinutes(date: Date, dateToCompare?: Date): number;
}

function addMinutes(minutes: number, date = new Date()) {
  return new Date(date.getTime() + (60 * 1000) * minutes);
}

function diffMinutes(date: Date, dateToCompare = new Date()) {
  const difference = (date.getTime() - dateToCompare.getTime()) / 1000;
  const res =  difference / 60;
  return res;
}

export const dateProvider: DateProvider = { addMinutes, diffMinutes };