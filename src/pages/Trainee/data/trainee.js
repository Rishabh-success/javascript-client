import moment from 'moment';

const getDateFormatted = (date) => moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
const trainees = [
  {
    id: '5c6c47af7740654f0915fac9',
    name: 'Sachin Tendulkar',
    email: 'sachin@gmail.com',
    createdAt: getDateFormatted('2019-02-10T18:15:11.778Z'),
  },
  {
    id: '5c6c47af7740654f0455fac9',
    name: 'Virat Kohli',
    email: 'virat@gmail.com',
    createdAt: getDateFormatted('2019-02-12T18:15:11.778Z'),
  },
  {
    id: '5c6567af7740654f0915fac9',
    name: 'M.S. Dhoni',
    email: 'msdhoni@gmail.com',
    createdAt: getDateFormatted('2019-02-13T18:15:11.778Z'),
  },
  {
    id: '5c6c47af7747854f0915fac9',
    name: 'Rohit Sharma',
    email: 'rohit.sharma',
    createdAt: getDateFormatted('2019-02-14T18:15:11.778Z'),
  },
  {
    id: '5c6c47af7740654f0915876c9',
    name: 'Bumrah',
    email: 'bumhrah@gmail.com',
    createdAt: getDateFormatted('2019-02-15T18:15:11.778Z'),
  },
];

export { trainees, getDateFormatted };
