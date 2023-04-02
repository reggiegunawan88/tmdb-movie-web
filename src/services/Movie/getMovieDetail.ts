import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_TMDB_MOVIE_BASE_URL;

interface IProps {
  movieId: string;
}

const getMovieDetail = async ({ movieId }: IProps) => {
  const fetchConfig = {
    url: `${BASE_API}/${movieId}`,
    method: 'GET',
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getMovieDetail;
