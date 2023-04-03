import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the state
type IHome = {
  popularMovies: Array<any> | null;
  topRatedMovies: Array<any> | null;
};

// Define the initial state using that type
const initialState = {
  popularMovies: null,
  topRatedMovies: null,
} as IHome;

export const Home = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setPopularMovies: (state: IHome, action: PayloadAction<any>) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state: IHome, action: PayloadAction<any>) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { setPopularMovies, setTopRatedMovies } = Home.actions;

export default Home.reducer;
