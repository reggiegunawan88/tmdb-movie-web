import React from 'react';
import MovieCard from '@/components/Card/MovieCard';
import dynamic from 'next/dynamic';

const SearchResultEmptyState = dynamic(() => import('@/components/EmptyState/SearchResult'));

interface ISearchResult {
  keyword: string;
  data: any;
}

const SearchResult = ({ data, keyword }: ISearchResult) => {
  return (
    <div className="flex flex-col space-y-2 h-full">
      <span className="text-lg font-semibold break-words">Search Results for '{keyword}' keyword</span>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 p-2 gap-2 hide-scrollbar">
          {data?.map((item: any) => (
            <MovieCard key={item?.id} data={item} />
          ))}
        </div>
      ) : (
        <SearchResultEmptyState />
      )}
    </div>
  );
};

export default SearchResult;
