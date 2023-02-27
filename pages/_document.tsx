import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Unlock the power of Web3 with your mobile phone."
        />
        <meta name="robots" content="all" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="PNS" />
        <meta name="theme-color" content="#000000" />
        {/** Social share */}
        <meta property="og:title" content="PNS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usepns.xyz" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/djzeufu4j/image/upload/v1677464416/pns-banner_d2fauh.jpg"
        />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="547" />
        <meta
          property="og:description"
          content="Unlock the power of Web3 with your mobile phone."
        />

        {/* Search Keywords */}
        <meta name="keywords" content="PNS, Web3, mobile phone" />

        {/** See also */}
        <meta property="og:see_also" content="https://twitter.com/pnslabs" />
        <meta
          property="og:see_also"
          content="https://www.linkedin.com/company/pnslabs"
        />

        {/** Twitter share */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pnslabs" />
        <meta name="twitter:title" content="PNS" />
        <meta name="twitter:creator" content="@pnslabs" />
        <meta
          name="twitter:description"
          content="Unlock the power of Web3 with your mobile phone."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/djzeufu4j/image/upload/v1677464416/pns-banner_d2fauh.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="An image containing the PNS logo and a text saying; Unlock your crypto"
        />
        <meta name="twitter:domain" content="https://usepns.xyz" />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />

        {/** Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JGWN1ZF7XH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-JGWN1ZF7XH');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
