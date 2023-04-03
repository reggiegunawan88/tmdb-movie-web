import { useEffect, useState, useRef } from 'react';
import { RootState } from '@/store';
import { useDispatch } from 'react-redux';
import { setPopularMovies, setTopRatedMovies } from '@/store/slices/Home';
import useShallowEqualSelector from '@/helpers/redux/useShallowEqualSelector';
import getPopularMovies from '@/services/Movie/getPopularMovies';
import getTopRatedMovies from '@/services/Movie/getTopRatedMovies';
import getSearchResultMovie from '@/services/Search/getSearchResult';

const useHome = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies } = useShallowEqualSelector((state: RootState) => state.home);

  // local state
  const [keyword, setKeyword] = useState<string>('');
  const [searchResultData, setSearchResultData] = useState<Array<any>>([]);
  const [showSearchUI, setShowSearchUI] = useState<boolean>(false);

  const fetchPopularMovieData = () => {
    Promise.all([getPopularMovies(), getTopRatedMovies()])
      .then(([popularMovies, topRatedMovies]) => {
        dispatch(setPopularMovies(popularMovies));
        dispatch(setTopRatedMovies(topRatedMovies));
      })
      .catch(error => console.error(error));
  };

  const fetchDataByKeyword = () => {
    getSearchResultMovie({ query: keyword })
      .then((response: any) => {
        setSearchResultData(response?.results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        if (keyword) {
          return setShowSearchUI(true);
        }
        return setShowSearchUI(false);
      });
  };

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    fetchPopularMovieData();
  }, []);

  let firstRender = useRef(true);
  useEffect(() => {
    // skip first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // 500ms debounce
    const timeout = setTimeout(() => {
      fetchDataByKeyword();
    }, 500);
    return () => clearTimeout(timeout);
  }, [keyword]);

  return {
    widgetsData: {
      popularMovies: popularMovies?.results,
      topRatedMovies: topRatedMovies?.results,
    },
    searchData: {
      keyword: keyword,
      searchResultData: searchResultData,
      showSearchUI: showSearchUI,
    },
    onChangeKeyword,
  };
};

export default useHome;
