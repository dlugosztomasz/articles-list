import moment from 'moment';

const DATE_FORMAT = 'DD MMM YYYY';

const monthsWithTypoMapper = {
  mai: 'may',
  oktober: 'october',
  desember: 'december'
};

export const handleDate = (item) => {
  const itemClone = { ...item };
  const dateParts = itemClone.date.split(' ');
  const day = dateParts[0].replace('.', '');
  const month = moment().month(monthsWithTypoMapper[dateParts[1]] || dateParts[1])
    .format('M');
  const year = dateParts[2];
  const date = moment(`${month} ${day} ${year}`).format(DATE_FORMAT);

  return {
    ...itemClone,
    date
  };
};
