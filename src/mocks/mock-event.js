import { getRandomInteger, getRandomArrayElement, getRandomLengthArray } from '../utils.js';

const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Paris', 'London'];

const SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const generateDestination = () => ({
  description: getRandomLengthArray(SENTENCES, 1, 5),
  name: getRandomArrayElement(CITIES),
  pictures: new Array(getRandomInteger(1, 5)).fill(null).map(() => ({
    src: `http://picsum.photos/300/200?r=${Math.random()}`,
    description: getRandomArrayElement(SENTENCES),
  })),
});

const OPTIONS = [
  {
    title: 'Order Uber',
    price: 20,
  },
  {
    title: 'Add luggage',
    price: 50,
  },
  {
    title: 'Rent a car',
    price: 200,
  },
  {
    title: 'Add breakfast',
    price: 50,
  },
  {
    title: 'Book tickets',
    price: 40,
  },
  {
    title: 'Switch to comfort',
    price: 80,
  },
  {
    title: 'Lunch in city',
    price: 30,
  },
];

const offersList = TYPES.map((type) => ({
  type,
  offers: getRandomLengthArray(OPTIONS, 0, 5),
}));


const generateEvent = () => {
  const type = getRandomArrayElement(TYPES);

  return {
    dateFrom: '2019-03-19T11:20',
    dateTo: '2019-03-19T13:00',
    type,
    destination: generateDestination(),
    price: getRandomInteger(0, 250),
    offers: (offersList.find((el) => el.type === type)).offers,
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};

export { generateEvent };