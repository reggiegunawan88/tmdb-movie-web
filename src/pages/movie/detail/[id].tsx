import React, { ReactNode } from 'react';
import MainLayout from '@/layouts/MainLayout';
import useMovieDetail from '@/hooks/pages/Detail/useMovieDetail';
import LoadingState from '@/components/LoadingState';
import Image from 'next/image';

import FavoriteIcon from '@mui/icons-material/Favorite';
import formatDate from '@/helpers/formatter/formatDate';
import Review from '@/components/Review';

const Detail = () => {
  const { movieData, parseMovieGenreValue, simulateToggleFavorite, isFavorite } = useMovieDetail();

  if (movieData === null) {
    return <LoadingState />;
  }

  return (
    <div className="flex flex-col bg-darkblue">
      <div className="flex flex-col laptop:flex-row text-white max-w-xl mx-auto">
        {/* top image section */}
        {/* movie poster: mobile mode */}
        <div
          className="bg-no-repeat bg-cover bg-center laptop:bg-darkblue"
          style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movieData?.backdrop_path})` }}
        >
          <div className="block laptop:hidden relative w-[97px] h-[146px] tablet:w-[212px] tablet:h-[318px] m-5 overflow-hidden rounded-md">
            <Image
              alt="background-img"
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movieData?.poster_path}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* movie poster: desktop mode */}
        <div className="w-full">
          <div className="hidden laptop:block relative w-[300px] h-[450px] m-5 overflow-hidden rounded-md">
            <Image
              alt="background-img"
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${movieData?.poster_path}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        {/* description section */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-3 p-4 text-left">
            <span className="text-xl laptop:text-3xl font-bold">{movieData?.title}</span>
            <div className="flex flex-row items-center gap-x-6">
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
            {/* genre and release date section */}
            <div className="flex flex-col">
              <span>Released date: {formatDate(movieData?.release_date)}</span>
              <span>{parseMovieGenreValue()}</span>
            </div>
            {/* tagline */}
            <span className="italic text-gray-200">{movieData?.tagline}</span>
          </div>
          {/* overview section */}
          <div className="flex flex-col gap-y-3 p-4">
            <span className="text-xl font-semibold">Overview</span>
            <p>{movieData?.overview}</p>
          </div>
        </div>
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
