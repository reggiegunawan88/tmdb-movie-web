import React from 'react';

import Image from 'next/image';

const LoadingState = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="relative w-[150px] h-[150px]">
        <Image alt="loading-gif" src="/assets/gif/loading-state.gif" layout="fill" />
      </div>
    </div>
  );
};

export default LoadingState;
