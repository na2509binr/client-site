"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { MenuAPI } from "@/app/utils/api";
import { useGlobalData } from "@/app/providers/GlobalDataProvider";
import SocialLinks from "./social-links";
import VinhPhatHeader, { MenuItem } from "@/app/(main)/components/header/Vinhphatheader";


export default function Header() {
    const [menuData, setMenus] = useState<any[]>([]);

    useEffect(() => {
        MenuAPI.getTree().then(data => {
            const filtered = data.filter(item => item.url != "/");
            setMenus(filtered);
        });
    }, []);

    return (

        <>
            <VinhPhatHeader menuItems={menuData} />
        </>
    );

}
