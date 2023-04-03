import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import getPopularMovies from '@/services/Movie/getPopularMovies';
import getTopRatedMovies from '@/services/Movie/getTopRatedMovies';
import { RootState } from '@/store';
import { setPopularMovies, setTopRatedMovies } from '@/store/slices/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useHome = () => {
  const { popularMovies, topRatedMovies } = useShallowEqualSelector((state: RootState) => state.home);
  const dispatch = useDispatch();

  const fetchPopularMovieData = () => {
    Promise.all([getPopularMovies(), getTopRatedMovies()])
      .then(([popularMovies, topRatedMovies]) => {
        dispatch(setPopularMovies(popularMovies));
        dispatch(setTopRatedMovies(topRatedMovies));
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchPopularMovieData();
  }, []);

  return {
    popularMovies: popularMovies?.results,
    topRatedMovies: topRatedMovies?.results,
  };
};

export default useHome;
