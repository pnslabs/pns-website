import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Unlock the power of web3 with your mobile phone."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="PNS" />
        <meta name="theme-color" content="#000000" />
        {/** Social share */}
        <meta property="og:title" content="usepns.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usepns.xyz" />
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

        {/** Google Analytics */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BDXNDSJLDQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BDXNDSJLDQ');
        `}
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
