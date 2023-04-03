import React from 'react';
import ReviewCard from '@/components/Card/ReviewCard';
import useReview from '@/hooks/component/Review/useReview';

import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

interface IReview {
  data: any;
}

const ReviewSection = ({ data }: IReview) => {
  const { currentReviewData, reviewInput, handleReviewInput, simulateAddReview } = useReview({ data });

  return (
    <div className="flex flex-col text-gray-800 p-5 gap-y-4 bg-white">
      <span className="text-xl font-semibold">Review</span>
      {/* review list section */}
      {currentReviewData?.review_data?.length ? (
        currentReviewData?.review_data?.map((item: any, idx: number) => <ReviewCard key={idx} data={item} />)
      ) : (
        <div className="flex flex-col items-center text-gray-400 gap-y-3 my-5">
          <AssignmentLateIcon fontSize="medium" />
          <span>This movie has no review.</span>
        </div>
      )}

      {/* review input section */}
      <div className="flex flex-col laptop:flex-row items-center gap-y-4 laptop:gap-x-4">
        <input
          autoComplete="off"
          type="text"
          placeholder="Write a review..."
          className="px-4 w-full h-10 bg-white rounded-md border-default border-gray-300 outline-none"
          value={reviewInput}
          onChange={handleReviewInput}
        />
        <button
          className={`w-full laptop:w-fit ${
            reviewInput.length > 0 ? 'bg-blue-3' : 'bg-gray-300'
          } text-white rounded-md text-lg laptop:text-xl p-2 font-bold`}
          onClick={simulateAddReview}
          disabled={reviewInput.length === 0}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
