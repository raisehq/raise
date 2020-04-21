import dayjs from 'dayjs';

const addDays = (datetime: Date, days: number) => {
  const date = new Date(datetime.getTime());
  date.setDate(date.getDate() + days);
  return date;
};

export const getDates = (startDate: Date, stopDate: Date) => {
  const dateArray: Date[] = [];
  let currentDate: Date = new Date(startDate.getTime());
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dateArray;
};

export const getClosestIndexByDate = (dateList: Date[], targetDate: Date) => {
  // prettier-ignore
  const tempDiff = dateList.map(d =>
    Math.abs(dayjs(d).diff(dayjs(targetDate)))
  );
  const index = tempDiff.indexOf(Math.min(...tempDiff));
  return index;
};

export const getMediana = (numbers: number[]) => {
  if (!numbers.length) {
    return 0;
  }
  let median = 0;
  const count = numbers.length;
  numbers.sort();

  if (count % 2 === 0) {
    median = (numbers[count / 2 - 1] + numbers[count / 2]) / 2;
  } else {
    median = numbers[(count - 1) / 2];
  }

  return median;
};

export const getAverage = (arr: number[]) =>
  arr.reduce((p: number, c: number) => p + c, 0) / arr.length;
