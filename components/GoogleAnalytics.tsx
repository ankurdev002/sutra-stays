"use client";

import Script from "next/script";

/**
 * Google Analytics Component
 * 
 * To enable Google Analytics:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-XXXXXXXXXX)
 * 2. Add it to your .env.local file: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 * 3. This component will automatically load when the ID is present
 * 
 * For development, analytics will only load in production mode
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Only load in production and if GA ID is provided
  if (!gaId || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

