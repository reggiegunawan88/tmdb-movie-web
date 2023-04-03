import React from 'react';

import PersonIcon from '@mui/icons-material/Person';

import Image from 'next/image';

import Link from 'next/link';

const Header = () => {
  return (
    <div className="p-4 w-full text-sm text-dark-1 bg-blue-2">
      <div className="flex flex-row justify-between items-center max-w-xl mx-auto">
        <Link passHref href="/" prefetch={false}>
          <div className="relative w-[55px] h-[40px] laptop:w-[150px] laptop:h-[50px] cursor-pointer">
            <Image alt="tmdb-logo" src="/assets/images/tmdb_mobile_logo.svg" layout="fill" />
          </div>
        </Link>
        <Link passHref href="/movie/my-favorite" prefetch={false}>
          <div className="flex flex-row items-center space-x-1 text-white cursor-pointer">
            <PersonIcon fontSize="medium" />
            <span className="text-sm">user@email.com</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
