import '@/styles/global.css';

import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store';

import { Provider } from 'react-redux';
import Meta from '@/components/SEO/Meta';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return getLayout(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Meta />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>,
  );
};

export default MyApp;
