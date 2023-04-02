import { useEffect, useState } from 'react';
import getMovieDetail from '@/services/Movie/getMovieDetail';
import { useRouter } from 'next/router';

import { ParsedUrlQuery } from 'querystring';

interface IQueryParam extends ParsedUrlQuery {
  id: string;
}

const useMovieDetail = () => {
  const router = useRouter();
  const { id } = router?.query as IQueryParam;
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

  // output: genre1, genre2, etc
  const parseMovieGenreValue = () => {
    const arrStr: Array<string> = [];

    for (let genre of movieData?.genres) {
      arrStr.push(genre.name);
    }
    return arrStr.join(', ');
  };

  useEffect(() => {
    if (router.isReady) {
      getMovieDetailData();
    }
  }, [router.isReady]);

  return {
    movieData,
    parseMovieGenreValue,
  };
};

export default useMovieDetail;
