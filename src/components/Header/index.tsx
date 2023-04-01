import React from 'react';

import PersonIcon from '@mui/icons-material/Person';

import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-4 w-full text-sm text-dark-1 bg-blue-2">
      <div className="flex flex-row justify-between items-center max-w-xl mx-auto">
        <div className="block relative w-[55px] h-10 laptop:hidden">
          <Image alt="tmdb-logo" src="/assets/images/tmdb_mobile_logo.svg" layout="fill" />
        </div>
        <div className="hidden relative w-[154px] h-5 laptop:block">
          <Image alt="tmdb-logo" src="/assets/images/tmdb_logo.svg" layout="fill" />
        </div>
        <PersonIcon className="text-white" fontSize="medium" />
      </div>
    </div>
  );
};

export default Header;
