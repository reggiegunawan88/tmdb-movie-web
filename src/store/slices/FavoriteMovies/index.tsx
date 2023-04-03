import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the state
type IFavoriteMovies = {
  favoriteMovies: Array<any>;
};

// Define the initial state using that type
const initialState = {
  favoriteMovies: [],
} as IFavoriteMovies;

export const FavoriteMovies = createSlice({
  name: 'favorite-movies',
  initialState,
  reducers: {
    saveFavoriteMovie: (state: IFavoriteMovies, action: PayloadAction<any>) => {
      state.favoriteMovies = action.payload;
    },
  },
});

export const { saveFavoriteMovie } = FavoriteMovies.actions;

export default FavoriteMovies.reducer;
