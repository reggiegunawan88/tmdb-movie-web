import React from 'react';

const ReviewCard = () => {
  return (
    <div className="flex flex-col border-default border-gray-300 shadow-md rounded-md p-4 gap-y-5">
      <div className="flex flex-row items-center gap-x-4">
        <span className=" bg-blue-3 rounded-full px-2 text-xl text-white">A</span>
        <div className="flex flex-col">
          <span className="text-xl font-bold">A review from Anonymous</span>
          <span className="text-sm">Written by Anonymous</span>
        </div>
      </div>
      <div className="flex">
        <p className="leading-5">
          I rate this 6 out of 10. One of those points is for the special effects and another is because I watched it in
          3D IMAX. That means that the rest of it was worth 4 stars.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
