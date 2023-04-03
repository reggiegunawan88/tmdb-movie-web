import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchResultEmptyState = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center text-gray-400 gap-y-2">
      <SearchIcon fontSize="large" />
      <span className="text-base tablet:text-xl">Movie not found.</span>
    </div>
  );
};

export default SearchResultEmptyState;
