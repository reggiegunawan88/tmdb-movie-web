import React from 'react';

interface ISearchbar {
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar = ({ onChangeKeyword }: ISearchbar) => {
  return (
    <div className="flex w-full px-4">
      <input
        placeholder="Search..."
        autoComplete="off"
        className="px-4 w-full h-10 bg-white border-default border-gray-200 rounded-full border-dark-1 outline-none shadow-md text-gray-400"
        onChange={onChangeKeyword}
      />
    </div>
  );
};

export default Searchbar;
