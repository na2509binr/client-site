"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { menuData } from "../../types/menu";
import MenuItem from "./menu-desktop-item";

export default function Header() {
    const pathname = usePathname();

    const isHome = pathname === "/";

    return (


        <div
            className={`
            ${isHome ? "hidden px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-transparent"
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
                    <div className={`${isHome ? "text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75" : "hidden"}`}
                    // className="text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75 "
                    >
                        <span className="flex items-center">
                            Số 39A phố Pháo Đài Láng, TT Phụ nữ TW, Phường Láng , Thành phố Hà Nội, Việt Nam
                        </span>

                        <span className="flex justify-end items-center">
                            <Link href="tel:0333666073" className="underline hover:no-underline hover:text-[#ff281c]">+84 333 666 073</Link>
                        </span>

                        <span className="flex justify-end items-center">
                            <Link href="#" className="underline hover:no-underline hover:text-[#ff281c]">email@example.com</Link>
                        </span>

                        <div className="flex justify-end items-center space-x-0.75 text-[#dbdbdb] text-[17px]">
                            <Link href="#">
                                <FontAwesomeIcon icon={faTwitter} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                            </Link>
                            <Link href="#">
                                <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                            </Link>
                            <Link href="#">
                                <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                            </Link>
                        </div>
                    </div>
                    {/* <nav className="bg-white shadow px-6 py-4"> */}
                    <nav className="flex-1 flex justify-end items-center space-x-15 py-4 font-semibold ">
                        <ul className={`flex space-x-10 ${isHome ? " text-gray-700" : ""}`} >

                            {menuData.map((menu) => {
                                return <MenuItem key={menu.id} menu={menu} isHome={isHome} />;
                            })}
                        </ul>
                        <Link href="tel:0333666073" className="cursor-pointer hidden xl:block">
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
