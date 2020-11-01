import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card';
import {Provider} from 'react-redux';
import history from '../../history';
import {films} from '../../../mocks/films';
import configureStore from 'redux-mock-store';

const film = films[0];
Enzyme.configure({
  adapter: new Adapter(),
});

describe(`E2e test small-movie-card`, () => {
  const handleSelectedFilms = jest.fn();

  const main = mount(
    <SmallMovieCard history={history} isPlaying={false} film={film} handleSelectedFilms={handleSelectedFilms} />
  );

  it(`Should be click on the card`, () => {
    const btn = main.find(`article.catalog__movies-card`);
    btn.simulate(`click`, film);
    expect(handleSelectedFilms).toHaveBeenCalledWith(film);
  });
});
