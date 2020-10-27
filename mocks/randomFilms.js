import {getRandomNumber, getRandomElement, encodeText} from '../src/utils';
import {tags as genres} from './tags';
import {articles} from './articles';

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

const getMovies = (array) => {
  return array.reduce((acc, movie, index) => {
    acc.push({
      id: index,
      title: movie,
      srcMovie: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: getRandomElement(genres),
      rating: Math.floor(Math.random() * 5),
      countRating: 240,
      descriptin: `${getRandomElement(stringForDescription)} ${getRandomElement(
        stringForDescription
      )} ${getRandomElement(stringForDescription)}`,
      year: randomDate().getFullYear(),
      src: `/img/${encodeText(movie)}.jpg`,
      director: `Wes Andreson`,
      starring: [
        `Bill Murray`,
        `Edward Norton`,
        `Jude Law`,
        `Willem Dafoe`,
        `and other`,
      ],
      reviews: [
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir one`,
          date: `December 24, 2016`,
          rating: `8.9`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir one one`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir two`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir two two`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir one one`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir two`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir two two`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir one one`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir two`,
          date: `December 24, 2016`,
        },
        {
          description: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of
                        one of the director's funniest and most exquisitely designed movies in years.`,
          author: `Kate Muir two two`,
          date: `December 24, 2016`,
        },
      ],
    });
    return acc;
  }, []);
};
const films = getMovies(titles);
export {films};
