import { useEffect, useState } from 'react';
import getPopularMovies from '@/services/Movie/getPopularMovies';

const usePopular = () => {
  const [popularMovies, setPopularMovies] = useState<Array<any>>([]);

  const getPopularMoviesData = () => {
    getPopularMovies()
      .then((response: any) => {
        setPopularMovies(response?.results);
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
