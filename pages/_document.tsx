import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Unlock the power of web3 with your mobile phone."
        />
        <link rel="icon" type="image/x-icon" href="/icons/logo.svg" />
        <meta name="theme-color" content="#F7F6FF" />
        {/** Social share */}
        <meta property="og:title" content="pns.foundation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pns.foundation" />
        <meta property="og:image" content="/socials/Header.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content="Unlock the power of web3 with your mobile phone."
        />

        {/** Twitter share */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/socials/Header.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
