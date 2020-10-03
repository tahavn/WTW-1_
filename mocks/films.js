import { getRandomNumber, getRandomElement, encodeText } from '../src/utils';
import { tags as genres } from './tags';
import { articles } from './articles';

const titles = articles.map((item) => {
    return item.title;
});
const stringForDescription = [
    `Beautiful & luxurious apartment at great location`,
    `Nice, cozy, wood and stone place`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
    `Beautiful & luxurious apartment at great location`,
    `Nice, cozy, wood and stone place`,
    `Wood and stone place`,
    `Nice, cozy, warm big bed apartment`,
];

const randomDate = () => {
    const min = new Date(1997, 2, 2).getTime();
    const max = new Date(2018, 2, 2).getTime();
    const r = getRandomNumber(min, max);
    return new Date(r);
};

const getMovies = (titles) => {
    return titles.reduce((acc, movie) => {
        console.log(acc);
        acc.push({
            title: movie,
            genre: getRandomElement(genres),
            rating: Math.floor(Math.random() * 5),
            descriptin: `${getRandomElement(
        stringForDescription
      )} ${getRandomElement(stringForDescription)} ${getRandomElement(stringForDescription)}`,
            year: randomDate(),
            src: encodeText(movie),
        });
        return acc;
    }, []);
};
const films = getMovies(titles);
export { films };