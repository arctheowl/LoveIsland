import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactGA from "react-ga";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-5J79YQTF7X`}
      />
      <Script strategy="lazyOnload" id="GA">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5J79YQTF7X');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
