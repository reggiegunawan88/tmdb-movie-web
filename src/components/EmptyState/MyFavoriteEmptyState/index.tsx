import React from 'react';
import Link from 'next/link';

const MyFavoriteEmptyState = () => {
  return (
    <div className="h-full flex flex-col gap-y-3 justify-center items-center">
      <span className="text-base tablet:text-xl laptop:text-2xl">You don't have any favorite movie.</span>
      <Link passHref href="/">
        <button className="bg-blue-1 hover:bg-blue-2 text-white font-bold rounded-full p-3 tablet:text-lg">
          Find Favorite Movie
        </button>
      </Link>
    </div>
  );
};

export default MyFavoriteEmptyState;
