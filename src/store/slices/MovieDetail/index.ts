import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the state
type IMovieDetail = {
  movieData: any;
};

// Define the initial state using that type
const initialState = {
  movieData: null,
} as IMovieDetail;

export const MovieDetail = createSlice({
  name: 'movie-detail',
  initialState,
  reducers: {
    storeMovieData: (state: IMovieDetail, action: PayloadAction<any>) => {
      state.movieData = action.payload;
    },
  },
});

export const { storeMovieData } = MovieDetail.actions;

export default MovieDetail.reducer;
