import React from 'react';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface IData {
  data: {
    title: string
    keywords: string
    description: string
    ogTitle: string
    ogDescription: string
  }
}

const Meta = ({ data }: IData) => {
  const { title, keywords, description, ogTitle, ogDescription } = data;
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords || 'tmdb'} />
        <meta name="theme-color" content="#61C7B5" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: ogTitle,
          description: ogDescription,
          type: 'website',
          locale: 'en',
          site_name: 'TMDB Dummy Movie Website'
        }}
      />
    </>
  );
};

Meta.defaultProps = {
  data: {
    title: 'The Movie Database Dummy Web',
    keywords: 'TMDB, the movie database',
    description: 'TMDB Web Apps',
    ogTitle: 'The Movie Database Dummy Web',
    ogDescription: 'TMDB Web Apps'
  }
};

export default Meta;
