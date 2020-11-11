import React, {useEffect} from 'react';
import {getFavoriteFilms,statusFavariteFilms} from '../../store/data/data-selector';
import {Operations as DataOperations} from '../../store/data/data-reducer';
import CatalogList from '../catalog-list/catalog-list';
import { connect } from 'react-redux';

const Mylist = (props) => {
  const {loadFavoritefilms,statusFavariteFilms,favoriteFilms} = props;
  useEffect(() => {
    console.log(loadFavoritefilms);
    loadFavoritefilms();
  }, []);
  if(statusFavariteFilms.isLoadingFavoriteFilms){
    return <div>Loading</div>
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {favoriteFilms && <CatalogList films={favoriteFilms} />}
    </section>
  );
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
  statusFavariteFilms: statusFavariteFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoritefilms: () => {
    dispatch(DataOperations.loadFavoriteFilms());

  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Mylist);
