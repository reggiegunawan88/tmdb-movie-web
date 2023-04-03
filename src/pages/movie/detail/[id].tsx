import React, { ReactNode } from 'react';
import MainLayout from '@/layouts/MainLayout';
import LoadingState from '@/components/LoadingState';
import Review from '@/components/Review';
import ImageSection from '@/components/Pages/MovieDetail/ImageSection';
import DescriptionSection from '@/components/Pages/MovieDetail/DescriptionSection';
import useMovieDetail from '@/hooks/pages/Detail/useMovieDetail';

const Detail = () => {
  const { movieData, parseMovieGenreValue, simulateToggleFavorite, isFavorite } = useMovieDetail();

  if (movieData === null) {
    return <LoadingState />;
  }

  return (
    <div className="flex flex-col bg-darkblue">
      <div className="flex flex-col laptop:flex-row text-white max-w-xl mx-auto">
        {/* image section */}
        <ImageSection data={movieData} />

        {/* description section */}
        <DescriptionSection
          data={movieData}
          isFavorite={isFavorite}
          simulateToggleFavorite={simulateToggleFavorite}
          parseMovieGenreValue={parseMovieGenreValue}
        />
      </div>

      {/* review section */}
      <Review data={movieData} />
    </div>
  );
};

Detail.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Detail;
