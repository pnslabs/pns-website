import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Unlock the power of web3 with your mobile phone."
        />
        <link rel="icon" type="image/x-icon" href="/icons/icon.svg" />
        <meta name="theme-color" content="#F7F6FF" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&family=Chakra+Petch:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
