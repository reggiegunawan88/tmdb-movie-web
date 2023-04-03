import { ReactNode } from 'react';

import dynamic from 'next/dynamic';
import MainLayout from '@/layouts/MainLayout';
import Searchbar from '@/components/Pages/Home/Searchbar';
import WidgetsGroup from '@/components/Pages/Home/WidgetsGroup';
import useHome from '@/hooks/pages/Home/useHome';

// dynamic import component
const SearchResult = dynamic(() => import('@/components/Pages/Home/SearchResult'));

const Home = () => {
  const { widgetsData, searchData, onChangeKeyword } = useHome();

  return (
    <div className="flex flex-col gap-y-4 p-4 max-w-xl mx-auto h-full">
      <Searchbar onChangeKeyword={onChangeKeyword} />
      <div className="flex flex-col flex-1">
        {!searchData.showSearchUI ? (
          <WidgetsGroup data={widgetsData} />
        ) : (
          <SearchResult data={searchData.searchResultData} keyword={searchData.keyword} />
        )}
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
