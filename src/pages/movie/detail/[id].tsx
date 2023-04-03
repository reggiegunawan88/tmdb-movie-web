import React, { ReactNode } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useMovieDetail from '@/hooks/pages/Detail/useMovieDetail';
import LoadingState from '@/components/LoadingState';
import Image from 'next/image';

import FavoriteIcon from '@mui/icons-material/Favorite';
import formatDate from '@/helpers/formatDate';
import Review from '@/components/Review';

const Detail = () => {
  const { movieData, parseMovieGenreValue, simulateToggleFavorite, isFavorite } = useMovieDetail();

  if (movieData === null) {
    return <LoadingState />;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-full bg-darkblue text-white">
        {/* top image section */}
        <div
          className="bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movieData?.backdrop_path})` }}
        >
          <div className="relative w-[97px] h-[146px] m-5">
            <Image
              alt="background-img"
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movieData?.poster_path}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* description section */}
        <div className="flex flex-col gap-y-3 p-4 text-center">
          <span className="text-xl text-center">{movieData?.title}</span>
          <div className="flex flex-row items-center justify-center gap-x-6">
            <div className="flex flex-row items-center gap-x-2">
              <span>80%</span>
              <span>User Score</span>
            </div>
            <div className="border-l-default h-6 border-gray-500"></div>
            <button className="flex flex-row gap-x-1" onClick={simulateToggleFavorite}>
              <FavoriteIcon className={`${isFavorite() ? 'text-red-400' : 'text-white'}`} fontSize="medium" />
              {isFavorite() ? <span>Added to Favorite</span> : <span>Add to Favorite</span>}
            </button>
          </div>
        </div>
        {/* genre and release date section */}
        <div className="flex flex-col p-2 text-center">
          <span>Released date: {formatDate(movieData?.release_date)}</span>
          <span>{parseMovieGenreValue()}</span>
        </div>
        {/* overview section */}
        <div className="flex flex-col gap-y-3 p-4">
          <span className="text-xl font-semibold">Overview</span>
          <p>{movieData?.overview}</p>
        </div>
      </div>
      {/* review section */}
      <Review />
    </div>
  );
};

Detail.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Detail;
