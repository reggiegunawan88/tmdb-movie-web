import React from 'react';
import Image from 'next/image';

import formatDate from '@/helpers/formatter/formatDate';
import useCard from '@/hooks/component/Card/useCard';

interface IProps {
  data: any;
}

const MovieCard = ({ data }: IProps) => {
  const { redirectToMovieDetail } = useCard({ movieId: data?.id });

  return (
    <div
      className="flex flex-row shadow-md rounded-md cursor-pointer laptop:transform laptop:transition laptop:duration-500 laptop:hover:scale-105"
      onClick={redirectToMovieDetail}
    >
      <div>
        <div className="relative w-[94px] h-[141px]">
          <Image
            alt="movie-poster"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${data?.poster_path}`}
            layout="fill"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col p-3 gap-y-5">
        <div className="flex flex-col">
          <span className="font-bold leading-5">{data?.original_title}</span>
          <span className="text-sm text-gray-500">{formatDate(data?.release_date)}</span>
        </div>
        <p className="text-sm leading-5 line-clamp-2">{data?.overview || '-'}</p>
      </div>
    </div>
  );
};

export default MovieCard;
