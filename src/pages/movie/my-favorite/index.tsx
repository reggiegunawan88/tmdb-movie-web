import React, { ReactNode } from 'react';
import MovieCard from '@/components/Card/MovieCard';
import useMyFavorite from '@/hooks/pages/MyFavorite/useMyFavorite';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';

const MyFavoriteEmptyState = dynamic(() => import('@/components/EmptyState/MyFavoriteEmptyState'));

const MyFavorite = () => {
  const { favoriteMovies } = useMyFavorite();

  if (favoriteMovies.length === 0) {
    return <MyFavoriteEmptyState />;
  }

  return (
    <div className="flex gap-y-4 p-4 max-w-xl mx-auto">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold">My Favorite Movies</span>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 p-2 gap-2 hide-scrollbar">
            {favoriteMovies?.map((item: any) => (
              <MovieCard key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

MyFavorite.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyFavorite;
