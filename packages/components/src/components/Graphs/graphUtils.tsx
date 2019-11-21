import moment from 'moment';

const addDays = (datetime, days) => {
  const date = new Date(datetime.getTime());
  date.setDate(date.getDate() + days);
  return date;
};

export const getDates = (startDate: Date, stopDate) => {
  const dateArray: Date[] = [];
  let currentDate: Date = new Date(startDate.getTime());
  while (currentDate <= stopDate) {
    dateArray.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  return dateArray;
};

export const getClosestIndexByDate = (dateList, targetDate) => {
  const tempDiff = dateList.map(d => Math.abs(moment(d).diff(moment(targetDate))));
  const index = tempDiff.indexOf(Math.min(...tempDiff));
  return index;
};

export const getMediana = numbers => {
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

export const getAverage = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
