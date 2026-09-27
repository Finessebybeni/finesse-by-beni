"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-T060Q5HYY9";
const PIXEL_ID = "172876243923349";

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        setConsented(true);
      }
    };
    check();

    // CookieBanner дава съгласие в реално време (без reload) точно чрез това събитие.
    window.addEventListener("finesse-consent-changed", check);
    return () => window.removeEventListener("finesse-consent-changed", check);
  }, []);

  if (!consented) return null;

  return (
    <>
      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
