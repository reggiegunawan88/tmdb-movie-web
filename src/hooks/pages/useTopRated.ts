import getTopRatedMovies from '@/services/Movie/getTopRatedMovies';
import { useEffect, useState } from 'react';

const useTopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Array<any>>([]);

  const getTopRatedMoviesData = () => {
    getTopRatedMovies()
      .then((response: any) => {
        setTopRatedMovies(response?.results);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  useEffect(() => {
    getTopRatedMoviesData();
  }, []);

  return {
    topRatedMovies,
  };
};

export default useTopRated;
