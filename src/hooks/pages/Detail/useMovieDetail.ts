import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

import { RootState } from '@/store';
import useShallowEqualSelector from '@/helpers/redux/useShallowEqualSelector';
import { saveFavoriteMovie } from '@/store/slices/FavoriteMovies';
import getMovieDetail from '@/services/Movie/getMovieDetail';

interface IQueryParam extends ParsedUrlQuery {
  id: string;
}

const useMovieDetail = () => {
  const router = useRouter();
  const { id } = router?.query as IQueryParam;
  const dispatch = useDispatch();
  const { favoriteMovies } = useShallowEqualSelector((state: RootState) => state.favoriteMovies);

  // local state
  const [movieData, setMovieData] = useState(null) as any;

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

  // output: "genre1, genre2"
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
