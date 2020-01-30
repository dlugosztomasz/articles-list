import moment from 'moment';

const DATE_FORMAT = 'DD MMM YYYY';

const monthsWithTypoMapper = {
  mai: 'may',
  oktober: 'october',
  desember: 'december'
};

export const handleDate = (item) => {
  const itemClone = {...item};
  const date = itemClone.date.split(' ');
  const month = date[1];
  const appropriateMonth = monthsWithTypoMapper[month];
  if (appropriateMonth) {
    const day = date[0];
    const year = date[2];
    const newDate = [day, appropriateMonth, year].join(' ');
    itemClone.date = newDate;
  }
  return {
    ...itemClone,
    date: moment(itemClone.date).format(DATE_FORMAT).toString()
  }
};
