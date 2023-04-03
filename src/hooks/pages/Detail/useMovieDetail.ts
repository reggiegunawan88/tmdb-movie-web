import { useEffect, useState } from 'react';
import getMovieDetail from '@/services/Movie/getMovieDetail';
import { useRouter } from 'next/router';

import { ParsedUrlQuery } from 'querystring';
import { useDispatch } from 'react-redux';
import { saveFavoriteMovie } from '@/store/slices/FavoriteMovies';
import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import { RootState } from '@/store';

interface IQueryParam extends ParsedUrlQuery {
  id: string;
}

const useMovieDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router?.query as IQueryParam;
  const [movieData, setMovieData] = useState(null) as any;
  const { favoriteMovies } = useShallowEqualSelector((state: RootState) => state.favoriteMovies);

  const getMovieDetailData = () => {
    getMovieDetail({ movieId: id })
      .then((response: any) => {
        setMovieData(response);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  // output: genre1, genre2, etc
  const parseMovieGenreValue = () => {
    const arrStr: Array<string> = [];

    for (let genre of movieData?.genres) {
      arrStr.push(genre.name);
    }
    return arrStr.join(', ');
  };

  const isFavorite = (): boolean => {
    const isFavoriteMovie = favoriteMovies.some((e: any) => e?.id === movieData.id) || false;
    return isFavoriteMovie;
  };

  const simulateToggleFavorite = () => {
    if (isFavorite()) {
      // remove from favorite
      const currentFavorite = favoriteMovies;
      const newFavorite = currentFavorite.filter((item: any) => item?.id !== movieData?.id); // filter unmatched id value
      return dispatch(saveFavoriteMovie(newFavorite));
    }

    // add to favorite
    const newFavorite = [...favoriteMovies, movieData];
    return dispatch(saveFavoriteMovie(newFavorite));
  };

  useEffect(() => {
    if (router.isReady) {
      getMovieDetailData();
    }
  }, [router.isReady]);

  return {
    movieData,
    parseMovieGenreValue,
    simulateToggleFavorite,
    isFavorite,
  };
};

export default useMovieDetail;
