import React, { useState, useEffect } from 'react';
import useShallowEqualSelector from '@/helpers/redux/useShallowEqualSelector';
import { RootState } from '@/store';
import formatDate from '@/helpers/formatter/formatDate';
import { useDispatch } from 'react-redux';
import { storeMovieReviewList } from '@/store/slices/Review';

interface IProps {
  data: any;
}
const useReview = ({ data }: IProps) => {
  const dispatch = useDispatch();
  const { reviewDataList } = useShallowEqualSelector((state: RootState) => state.movieReview);
  const [currentReviewData, setCurrentReviewData] = useState({
    id: '',
    original_title: '',
    review_data: [],
  });
  const [reviewInput, setReviewInput] = useState<string>('');

  const handleReviewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewInput(e.target.value);
  };

  const resetInputField = () => {
    setReviewInput('');
  };

  const isReviewExist = () => {
    // validate either review is already exist for certain id or no
    return reviewDataList.some((item: any) => item?.id === data?.id);
  };

  const simulateAddReview = () => {
    if (!isReviewExist()) {
      // initiate upcoming data
      const userReviewData = {
        id: data?.id,
        original_title: data?.original_title,
        review_data: [
          {
            author: 'Anonymous',
            created_date: formatDate(new Date().toString()) || '',
            review: reviewInput,
          },
        ],
      };
      const newData = [...reviewDataList, userReviewData];
      dispatch(storeMovieReviewList(newData));
    } else {
      let originalData = [...reviewDataList];

      // get matched data with the current movie id
      let matchedData = originalData.find((item: any) => {
        return item?.id === data?.id;
      });

      // set initial value for upcoming data
      const userReviewData = {
        ...matchedData,
        review_data: [
          ...matchedData.review_data,
          {
            author: 'Anonymous',
            created_date: formatDate(new Date().toString()) || '',
            review: reviewInput,
          },
        ],
      };

      // finally, find the idx we want to replace
      const incomingUpdateIdx = originalData.findIndex((obj: any) => obj?.id === userReviewData?.id);
      originalData[incomingUpdateIdx] = userReviewData;
      dispatch(storeMovieReviewList(originalData));
    }
    resetInputField();
  };

  const getCurrentMovieReview = () => {
    if (isReviewExist()) {
      // find matched id object from redux storage
      const currentData = reviewDataList?.find((item: any) => {
        return item?.id === data?.id;
      });
      return setCurrentReviewData({
        id: currentData?.id,
        original_title: currentData?.original_title,
        review_data: currentData?.review_data,
      });
    }
  };

  useEffect(() => {
    getCurrentMovieReview();
  }, [reviewDataList]);

  return {
    currentReviewData,
    reviewInput,
    handleReviewInput,
    simulateAddReview,
  };
};

export default useReview;
