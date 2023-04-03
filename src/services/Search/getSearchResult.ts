import fetcher from '@/helpers/fetcher';

const BASE_API = process.env.NEXT_PUBLIC_TMDB_SEARCH_MOVIE_BASE_URL;

interface IProps {
  query: string;
}

const getSearchResultMovie = async ({ query }: IProps) => {
  const fetchConfig = {
    url: `${BASE_API}/movie${query ? `?query=${query}` : ''}`,
    method: 'GET',
  };

  const response = await fetcher(fetchConfig);
  return response;
};

export default getSearchResultMovie;
