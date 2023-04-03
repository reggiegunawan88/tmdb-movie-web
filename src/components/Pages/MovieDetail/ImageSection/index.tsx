import React from 'react';
import Image from 'next/image';

interface IImageSection {
  data: any;
}

const ImageSection = ({ data }: IImageSection) => {
  return (
    <div className="flex">
      {/* top image section */}
      {/* movie poster: mobile mode */}
      <div
        className="bg-no-repeat bg-cover bg-center laptop:bg-darkblue"
        style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${data?.backdrop_path})` }}
      >
        <div className="block laptop:hidden relative w-[97px] h-[146px] tablet:w-[212px] tablet:h-[318px] m-5 overflow-hidden rounded-md">
          <Image
            alt="background-img"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${data?.poster_path}`}
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
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}${data?.poster_path}`}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
