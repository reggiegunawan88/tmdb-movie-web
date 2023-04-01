import Div100vh from 'react-div-100vh';

import Header from '@/components/Header';
import { ReactNode } from 'react';

interface IChildren {
  children: ReactNode;
}

const MainLayout = ({ children }: IChildren) => {
  return (
    <Div100vh className="flex relative flex-col bg-main-daylight">
      <Header />
      <div className="overflow-auto flex-1">{children}</div>
    </Div100vh>
  );
};

export default MainLayout;
