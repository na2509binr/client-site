"use client";

import { useGlobalData } from "@/app/providers/GlobalDataProvider";

interface MapProp {
  height?: string;
};

export default function MapEmbed({ height = "200px" }: MapProp) {
  const { configSite } = useGlobalData();

  var colorMap = ""; 
  if (height == "0") {
    height = "full";
    colorMap = "filter grayscale";
  }

  return (
    // <div className={`w-full h-[374px] rounded-xl overflow-hidden shadow`}>
    <div className={`w-full h-[${height}] rounded-xl overflow-hidden shadow`}> 
      <iframe
        src={configSite?.googleMap}
        className={`w-full h-full ${colorMap}`}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
