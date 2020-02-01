import moment from 'moment';

const DATE_FORMAT = 'DD MMM YYYY';

const monthsWithTypoMapper = {
  mai: 'may',
  oktober: 'october',
  desember: 'december'
};

export const handleDate = (item) => {
  const itemClone = { ...item };
  const date = itemClone.date.split(' ');
  const { day, month, year } = date;
  const appropriateMonth = monthsWithTypoMapper[month];
  if (appropriateMonth) {
    itemClone.date = [ day, appropriateMonth, year ].join(' ');
  }
  return {
    ...itemClone,
    date: moment(itemClone.date).format(DATE_FORMAT)
      .toString()
  };
};
