import React, { ReactNode } from 'react';
import MainLayout from '@/layouts/MainLayout';
import MovieCard from '@/components/Card/MovieCard';
import LoadingState from '@/components/LoadingState';
import usePopular from '@/hooks/pages/Popular/usePopular';

const Popular = () => {
  const { popularMovies } = usePopular();

  if (!popularMovies) {
    return <LoadingState />;
  }

  return (
    <div className="flex gap-y-4 p-4 max-w-xl mx-auto">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold">Popular Movies</span>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 p-2 gap-2 hide-scrollbar">
            {popularMovies?.map((item: any) => (
              <MovieCard key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Popular.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Popular;
