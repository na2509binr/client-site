"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faYoutube,
  faTiktok,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

interface Props {
  configSite: any;
  className?: string;   // thêm className nếu cần
}

export default function SocialLinks({ configSite, className = "flex justify-end items-center space-x-0.75 text-[#dbdbdb] text-[17px]" }: Props) {
  if (!configSite) return null;

  const socialList = [
    { key: "facebook", icon: faFacebookF },
    { key: "instagram", icon: faInstagram },
    { key: "linkedin", icon: faLinkedinIn },
    { key: "twitter", icon: faTwitter },
    { key: "tiktok", icon: faTiktok },
    { key: "youtube", icon: faYoutube },
    { key: "pinterest", icon: faPinterest },
    { key: "zalo", icon: null }, // không có icon FontAwesome, bạn có thể dùng ảnh
  ];

  return (
    <div
      className={`${className}`}
    >
      {socialList.map(({ key, icon }) => {
        const url = configSite[key];
        if (!url) return null;

        return (
          <Link key={key} href={url} target="_blank">
            {icon ? (
              <FontAwesomeIcon
                icon={icon}
                className="hover:text-[#ff281c] transition-all duration-300 ease-in-out"
              />
            ) : (
              <span className="text-sm hover:text-[#ff281c] font-bold">Zalo</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
