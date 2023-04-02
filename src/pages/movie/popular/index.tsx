import MovieCard from '@/components/Card/MovieCard';
import HorizontalMovieListSkeleton from '@/components/Skeleton/Home/MovieThumbnailSkeleton';
import usePopular from '@/hooks/pages/usePopular';
import MainLayout from '@/layouts/MainLayout';
import React, { ReactNode } from 'react';

const Popular = () => {
  const { popularMovies } = usePopular();
  return (
    <div className="flex gap-y-4 p-4 max-w-xl mx-auto">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold">Top Rated Movies</span>
          {popularMovies ? (
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 p-2 gap-2 hide-scrollbar">
              {popularMovies?.map((item: any) => (
                <MovieCard key={item?.id} data={item} />
              ))}
            </div>
          ) : (
            <HorizontalMovieListSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

Popular.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Popular;
