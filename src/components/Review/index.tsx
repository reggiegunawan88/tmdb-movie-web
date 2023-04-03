import React from 'react';
import ReviewCard from '@/components/Card/ReviewCard';

const Review = () => {
  return (
    <div className="flex flex-col text-gray-800 p-4 gap-y-4">
      <span className="text-xl font-semibold">Review</span>
      <ReviewCard />
      <div className="flex flex-col laptop:flex-row items-center gap-y-4 laptop:gap-x-4">
        <input
          autoComplete="off"
          type="text"
          placeholder="Write a review..."
          className="px-4 w-full h-10 bg-white rounded-md border-default border-gray-300 outline-none"
        />
        <button className="w-full laptop:w-fit bg-blue-3 text-white rounded-md text-lg laptop:text-xl p-2 font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default Review;
