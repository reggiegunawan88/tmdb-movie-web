import React from 'react';

const MovieThumbnailSkeleton = () => {
  return (
    <div className="flex overflow-scroll p-2 space-x-3 hide-scrollbar">
      {[...Array(10)].map(index => (
        <div
          key={index}
          className="flex flex-col space-y-2 cursor-pointer h-fit transform transition duration-500 hover:scale-105"
        >
          <div className="relative w-[150px] h-[225px] overflow-hidden rounded-md">
            <div className="bg-gray-300 animate-pulse w-full h-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieThumbnailSkeleton;
