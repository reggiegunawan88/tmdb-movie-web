import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import getPopularMovies from '@/services/Movie/getPopularMovies';
import { RootState } from '@/store';
import { setPopularMovies } from '@/store/slices/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const usePopular = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useShallowEqualSelector((state: RootState) => state.home);

  const getPopularMoviesData = () => {
    getPopularMovies()
      .then((response: any) => {
        dispatch(setPopularMovies(response?.results));
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  useEffect(() => {
    getPopularMoviesData();
  }, []);

  return {
    popularMovies,
  };
};

export default usePopular;
