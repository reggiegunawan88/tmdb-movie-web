import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import { RootState } from '@/store';

const useMyFavorite = () => {
  const { favoriteMovies } = useShallowEqualSelector((state: RootState) => state.favoriteMovies);

  return {
    favoriteMovies,
  };
};

export default useMyFavorite;
