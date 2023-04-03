// list of reducers for each features
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

/* import slicers for each features */
import HomeSlicers from '@/store/slices/Home';
import MovieDetailSlicers from '@/store/slices/MovieDetail';
import FavoriteMoviesSlicers from '@/store/slices/FavoriteMovies';
import MovieReviewSlicers from '@/store/slices/Review';

// initiate redux persist
const favoritePersistConfig = {
  key: 'favorite_movies',
  storage,
};

const reviewPersistConfig = {
  key: 'movie_review',
  storage,
};

// combine all reducers
const combinedReducer = combineReducers({
  home: HomeSlicers,
  movieDetail: MovieDetailSlicers,
  favoriteMovies: persistReducer(favoritePersistConfig, FavoriteMoviesSlicers),
  movieReview: persistReducer(reviewPersistConfig, MovieReviewSlicers),
});

export default combinedReducer;
