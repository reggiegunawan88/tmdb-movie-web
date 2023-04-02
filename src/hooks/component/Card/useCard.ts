import { useRouter } from 'next/router';

interface IUseCard {
  movieId: string;
}

const useCard = ({ movieId }: IUseCard) => {
  const router = useRouter();

  const redirectToMovieDetail = () => {
    router.push(`/movie/detail/${movieId}`);
  };

  return {
    redirectToMovieDetail,
  };
};

export default useCard;
