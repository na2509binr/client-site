"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./menu-desktop-item";
import { useEffect, useState } from "react";
import { MenuAPI } from "@/app/utils/api";
import { useGlobalData } from "@/app/providers/GlobalDataProvider";
import SocialLinks from "./social-links";


export default function Header() {
    // const { configSite } = useGlobalData() as unknown as { configSite: { hotline: string } };
    const { configSite } = useGlobalData();


    const pathname = usePathname();
    const isHome = pathname === "/";
    const isAbout = pathname === "/about";


    const [menuData, setMenus] = useState<any[]>([]);
    useEffect(() => {
        MenuAPI.getTree().then(setMenus);
    }, []);


    // console.log("Config Site:", configSite);

    return (


        <div
            className={`
            ${isHome ? "hidden px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_6fr_1fr] bg-transparent"
                    : "px-10 absolute top-0 left-0 right-0 z-10"}
      `}
        >
            <div className="col-start-2 flex justify-between xl:space-x-40 ">
                <div className="bg-[#ff281c] px-2 py-3.5 shadow-2xl">
                    <Link href="/" className="text-blue-600 hover:underline">
                        <Image
                            className="dark:invert"
                            src="/images/LOGO DƯƠNG BẢN.png"
                            alt="Logo"
                            width={100}
                            height={20}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex-1 flex flex-col divide-y divide-[#f3f3f3]">
                    <div className={`${isHome ? "text-[#928e87] text-[12px] grid grid-cols-[1fr_1fr] py-1.75" : "hidden"}`}
                    // <div className={`${isHome ? "text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75" : "hidden"}`}
                    // className="text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75 "
                    >
                        <span className="flex items-center">
                            {configSite?.place}
                            {/* Số 39A phố Pháo Đài Láng, TT Phụ nữ TW, Phường Láng , Thành phố Hà Nội, Việt Nam */}
                        </span>

                        <div className="flex justify-between items-center">

                            <span className="flex justify-end items-center">
                                <Link href={`tel:${configSite?.hotline}`} className="underline hover:no-underline hover:text-[#ff281c]">
                                    {/* +84 333 666 073 */}
                                    {configSite?.hotline}
                                </Link>
                            </span>

                            <span className="flex justify-end items-center">
                                <Link href="#" className="underline hover:no-underline hover:text-[#ff281c]">
                                    {/* email@example.com */}
                                    {configSite?.email}
                                </Link>
                            </span>
                            <SocialLinks configSite={configSite} />
                        </div>

                    </div>
                    {/* <nav className="bg-white shadow px-6 py-4"> */}
                    <nav className="flex-1 flex justify-end items-center space-x-15 py-4 font-semibold text-white">
                        <ul className={`flex space-x-10 ${isHome ? " text-gray-700" : ""}`} >

                            {menuData.map((menu) => {
                                return <MenuItem key={menu.id} menu={menu} isHome={isHome} />;
                            })}
                        </ul>
                        <Link href={`tel:${configSite?.hotline}`} className="cursor-pointer hidden xl:block">
                            <div className="bg-[#ff281c] flex justify-between items-center space-x-2 text-white rounded-full 
                                px-3.5 py-1.5 border border-[#ff281c] hover:bg-white hover:text-[#ff281c] 
                                transition-all duration-300 ease-in-out">
                                <FontAwesomeIcon icon={faPhoneVolume} shake />
                                <span>Liên hệ ngay</span>
                            </div>
                        </Link>
                    </nav>

                </div>
            </div>
        </div >

    );
}
