import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

import formatDate from '@/helpers/formatter/formatDate';

interface IDescriptionSection {
  data: any;
  isFavorite: () => boolean;
  simulateToggleFavorite: () => void;
  parseMovieGenreValue: () => void;
}

const DescriptionSection = ({
  data,
  isFavorite,
  simulateToggleFavorite,
  parseMovieGenreValue,
}: IDescriptionSection) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-3 p-4 text-center laptop:text-left">
        {/* title section */}
        <span className="text-xl laptop:text-3xl font-bold">{data?.title}</span>
        {/* rating and add to favorite section */}
        <div className="flex flex-row gap-x-6 justify-center laptop:justify-start">
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
          <span>Released date: {formatDate(data?.release_date)}</span>
          <span>{parseMovieGenreValue()}</span>
        </div>
        {/* tagline */}
        <span className="italic text-gray-200">{data?.tagline}</span>
      </div>
      {/* overview section */}
      <div className="flex flex-col gap-y-3 p-4">
        <span className="text-xl font-semibold">Overview</span>
        <p>{data?.overview}</p>
      </div>
    </div>
  );
};

export default DescriptionSection;
