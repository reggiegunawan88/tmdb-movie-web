import React from 'react';

const Searchbar = () => {
  return (
    <div className="flex w-full px-4">
      <input
        placeholder="Search..."
        autoComplete="off"
        className="px-4 w-full h-10 bg-white rounded-full border-dark-1 outline-none shadow-md text-gray-400"
      />
    </div>
  );
};

export default Searchbar;
