import useShallowEqualSelector from '@/helpers/redux/useShallowEqualSelector';
import { RootState } from '@/store';

const useMyFavorite = () => {
  const { favoriteMovies } = useShallowEqualSelector((state: RootState) => state.favoriteMovies);

  return {
    favoriteMovies,
  };
};

export default useMyFavorite;
