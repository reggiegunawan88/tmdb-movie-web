import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the state
type IMovieReview = {
  reviewDataList: Array<any>;
};

// Define the initial state using that type
const initialState = {
  reviewDataList: [],
} as IMovieReview;

export const MovieReview = createSlice({
  name: 'movie-review',
  initialState,
  reducers: {
    storeMovieReviewList: (state: IMovieReview, action: PayloadAction<any>) => {
      state.reviewDataList = action.payload;
    },
  },
});

export const { storeMovieReviewList } = MovieReview.actions;

export default MovieReview.reducer;
