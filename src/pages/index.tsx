import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';
import useHome from '@/hooks/pages/useHome';
import Searchbar from '@/components/Searchbar';
import MovieCard from '@/components/Card/MovieCard';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';

const Home = () => {
  const { popularMovies, topRatedMovies } = useHome();

  return (
    <div className="flex flex-col gap-y-4 p-4 max-w-xl mx-auto">
      <Searchbar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-col space-y-2">
          <Link passHref href="/popular">
            <div className="flex flex-row items-center gap-x-2">
              <span className="text-xl font-semibold">Trending</span>
              <ChevronRightIcon fontSize="medium" />
            </div>
          </Link>
          <div className="flex overflow-scroll space-x-3 hide-scrollbar">
            {popularMovies?.map((item: any) => (
              <MovieCard key={item?.id} data={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Link passHref href="/top-rated">
            <div className="flex flex-row items-center gap-x-2">
              <span className="text-xl font-semibold">Top Rated</span>
              <ChevronRightIcon fontSize="medium" />
            </div>
          </Link>
          <div className="flex overflow-scroll space-x-3 hide-scrollbar">
            {topRatedMovies?.map((item: any) => (
              <MovieCard key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
