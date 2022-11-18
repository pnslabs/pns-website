import '../styles/globals.scss';
import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>PNS</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
