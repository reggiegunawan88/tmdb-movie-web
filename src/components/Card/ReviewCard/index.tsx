import React from 'react';

interface IReviewCard {
  data: {
    author: string;
    created_date: string;
    review: string;
  };
}

const ReviewCard = ({ data }: IReviewCard) => {
  return (
    <div className="flex flex-col border-default border-gray-300 shadow-md rounded-md p-4 gap-y-5">
      <div className="flex flex-row items-center gap-x-4">
        <span className=" bg-blue-3 rounded-full px-2 text-xl text-white">{data?.author?.slice(0, 1)}</span>
        <div className="flex flex-col">
          <span className="text-xl font-bold">A review by {data?.author}</span>
          <span className="text-sm">
            Written by <span className="font-semibold">{data?.author}</span> on {data?.created_date}
          </span>
        </div>
      </div>
      <div className="flex">
        <p className="leading-5">{data?.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
