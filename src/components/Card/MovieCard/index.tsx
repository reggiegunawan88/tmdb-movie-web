import React from 'react';
import Image from 'next/image';
import formatDate from '@/helpers/formatDate';

interface IProps {
  data: any;
}

const MovieCard = ({ data }: IProps) => {
  return (
    <div className="flex flex-col space-y-2 cursor-pointer h-fit transform transition duration-500 hover:scale-105">
      <div className="relative w-[150px] h-[225px] overflow-hidden rounded-md">
        <Image
          alt="movie-poster"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${data?.poster_path}`}
          layout="fill"
          priority
        />
        <div className="w-[68px] h-[68px] rounded-full" data-percent="70.1"></div>
      </div>
      <div className="flex flex-col p-2">
        <span className="font-bold">{data?.original_title}</span>
        <span className="text-sm text-gray-500">{formatDate(data?.release_date)}</span>
      </div>
    </div>
  );
};

export default MovieCard;
