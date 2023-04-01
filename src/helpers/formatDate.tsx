/**
 * Format date
 * @param {string} param, ex: '2020-12-14'
 * @returns formatted date, ex: Dec 14, 2020
 */
const formatDate = (param: string) => {
  const dateObj = new Date(param?.replace(/-/g, '/'));
  const date = dateObj.getDate();
  let month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  let monthResult = ''

  switch (month) {
    case 0:
      monthResult = 'Jan';
      break;
    case 1:
      monthResult = 'Feb';
      break;
    case 2:
      monthResult = 'Mar';
      break;
    case 3:
      monthResult = 'Apr';
      break;
    case 4:
      monthResult = 'Mei';
      break;
    case 5:
      monthResult = 'Jun';
      break;
    case 6:
      monthResult = 'Jul';
      break;
    case 7:
      monthResult = 'August';
      break;
    case 8:
      monthResult = 'Sept';
      break;
    case 9:
      monthResult = 'Oct';
      break;
    case 10:
      monthResult = 'Nov';
      break;
    case 11:
      monthResult = 'Dec';
      break;
    default:
      return null;
  }
  const formattedDate = `${monthResult} ${date}, ${year}`;
  return formattedDate;
};

export default formatDate;
