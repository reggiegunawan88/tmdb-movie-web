// list of reducers for each features
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

/* import slicers for each features */
import HomeSlicers from '@/store/slices/Home';
import MovieDetailSlicers from '@/store/slices/MovieDetail';
import FavoriteMoviesSlicers from '@/store/slices/FavoriteMovies';

// initiate redux persist
const persistConfig = {
  key: 'favorite_movies',
  storage,
};

// combine all reducers
const combinedReducer = combineReducers({
  home: HomeSlicers,
  movieDetail: MovieDetailSlicers,
  favoriteMovies: persistReducer(persistConfig, FavoriteMoviesSlicers),
});

export default combinedReducer;
