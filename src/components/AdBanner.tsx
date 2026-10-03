"use client";

import { useEffect, useState } from "react";

type AdBannerProps = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerProps) => {
  const [isAdLoaded, setIsAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    try {
      if (process.env.NODE_ENV === "production") {
        // @ts-expect-error - Google AdSense window object
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setIsAdLoaded(true);
      }
    } catch (error: any) {
      console.error("AdSense error:", error.message);
      setAdError(true);
    }
  }, []);

  // In development, or if there is an error, we don't want to show blank space
  // unless we explicitly want a placeholder in dev
  if (process.env.NODE_ENV !== "production") {
    return (
      <div className="w-full flex justify-center items-center overflow-hidden py-4">
        <div className="w-full max-w-[728px] h-[90px] bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded flex items-center justify-center text-gray-500 dark:text-gray-400 font-medium text-sm">
          AdSense Banner Placeholder (Format: {dataAdFormat})
        </div>
      </div>
    );
  }

  if (adError) {
    return null; // Remove the ad block completely if there's an error loading
  }

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};

export default AdBanner;
