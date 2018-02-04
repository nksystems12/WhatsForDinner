const getTimeMode = () => {
  const today = new Date();
  const hours = today.getHours();
  if ( hours >= 5 && hours < 12 ) {
    return 'morning';
  }

  if ( hours >= 12 && hours < 20 ) {
    return 'day';
  }

  if ( hours >= 20 || hours < 5 ) {
    return 'night';
  }
};

export default getTimeMode;
