import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_TMDB_MOVIE_BASE_URL;

const getTopRatedMovies = async () => {
  const fetchConfig = {
    url: `${BASE_API}/top_rated`,
    method: 'GET',
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getTopRatedMovies;
