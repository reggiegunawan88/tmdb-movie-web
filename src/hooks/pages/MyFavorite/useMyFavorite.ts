import { RootState } from '@/store';
import useShallowEqualSelector from '@/helpers/redux/useShallowEqualSelector';

const useMyFavorite = () => {
  const { favoriteMovies } = useShallowEqualSelector((state: RootState) => state.favoriteMovies);

  return {
    favoriteMovies,
  };
};

export default useMyFavorite;
