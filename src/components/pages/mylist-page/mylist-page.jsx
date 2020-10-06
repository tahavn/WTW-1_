import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Mylist from '../../mylist/mylist';
import SmallMovieCard from '../../small-movie-card/small-movie-card';

const MylistPage = () => {
  return (
    <div className="user-page">
      <Header className={`user-page__head`} />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          <SmallMovieCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MylistPage;
