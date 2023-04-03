import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';
import useHome from '@/hooks/pages/useHome';
import Searchbar from '@/components/Searchbar';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import MovieThumbnailCard from '@/components/Card/MovieThumbnailCard';
import MovieThumbnailSkeleton from '@/components/Skeleton/Home/MovieThumbnailSkeleton';

const Home = () => {
  const { popularMovies, topRatedMovies } = useHome();

  return (
    <div className="flex flex-col gap-y-4 p-4 max-w-xl mx-auto">
      <Searchbar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-col space-y-2">
          <Link passHref href="/movie/popular" prefetch={false}>
            <div className="flex flex-row items-center gap-x-2 cursor-pointer hover:text-blue-3">
              <span className="text-xl font-semibold">Trending</span>
              <ChevronRightIcon fontSize="medium" />
            </div>
          </Link>
          {popularMovies ? (
            <div className="flex overflow-scroll p-2 space-x-3 hide-scrollbar">
              {popularMovies?.slice(0, 10).map((item: any) => (
                <MovieThumbnailCard key={item?.id} data={item} />
              ))}
            </div>
          ) : (
            // skeleton loading
            <MovieThumbnailSkeleton />
          )}
        </div>
        <div className="flex flex-col space-y-2">
          <Link passHref href="/movie/top-rated" prefetch={false}>
            <div className="flex flex-row items-center gap-x-2 cursor-pointer hover:text-blue-3 w-fit">
              <span className="text-xl font-semibold">Top Rated</span>
              <ChevronRightIcon fontSize="medium" />
            </div>
          </Link>
          {topRatedMovies ? (
            <div className="flex overflow-scroll p-2 space-x-3 hide-scrollbar">
              {topRatedMovies?.slice(0, 10).map((item: any) => (
                <MovieThumbnailCard key={item?.id} data={item} />
              ))}
            </div>
          ) : (
            // skeleton loading
            <MovieThumbnailSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
