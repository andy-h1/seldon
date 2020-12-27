export const subtotalValueOne = (items) => {
  return items.map(({ columnOne }) => columnOne).reduce((sum, i) => sum + i, 0);
};

export const subtotalValueTwo = (items) => {
  return items.map(({ columnTwo }) => columnTwo).reduce((sum, i) => sum + i, 0);
};

export const convertTime = (number) => {
  const day = Math.floor(number / 1440);
  const hour = Math.floor((number - day * 1440) / 60);

  if (number >= 1440) {
    return `${day} days`;
  }
  if (number > 60 && number < 1440) {
    return `${hour} hours`;
  }
  return `${number} mins`;
};

export const convertToCurrency = (data) => {
  return `$${data.toFixed(2)}`;
};

export const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};
