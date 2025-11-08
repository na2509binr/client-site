"use client";

interface MapProp {
  height?: string;
};

export default function MapEmbed({ height = "200px" }: MapProp) {
  var colorMap = ""; 
  if (height == "0") {
    height = "full";
    colorMap = "filter grayscale";
  }

  return (
    <div className={`w-full h-[${height}] rounded-xl overflow-hidden shadow`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.207361767395!2d105.78946217600821!3d21.02438738062387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab16edfb866d%3A0xc360ecbc05df681e!2sTran%20Phu%20Building!5e0!3m2!1svi!2s!4v1762167928611!5m2!1svi!2s"
        className={`w-full h-full ${colorMap}`}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
