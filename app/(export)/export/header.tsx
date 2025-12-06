// "use client"

// import MenuItem from "@/app/(main)/components/menu-desktop-item";
// import { menuData } from "@/app/types/menu";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
// import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image"
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function ExportHeader() {
//     const pathname = usePathname();

//     const isHome = pathname === "/";

//     return (
//         <>
//             <header className="w-full fixed z-100">
//                 <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] py-12">

//                     <div className="col-start-2 flex justify-between bg-white py-5 px-12 rounded-full shadow-2xl">
//                         <Link href="/">
//                             <Image
//                                 className="z-0 dark:invert h-full object-cover"
//                                 src="/images/Logo_LOGO MÀU CHUẨN.jpg"
//                                 alt="Logo"
//                                 width={100}
//                                 height={20}
//                                 priority
//                             />
//                         </Link>
//                         <div className="flex-1 flex flex-col divide-y divide-[#f3f3f3]">
//                             <div className={`${isHome ? "text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75" : "hidden"}`}
//                             // className="text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75 "
//                             >
//                                 <span className="flex items-center">
//                                     Số 39A phố Pháo Đài Láng, TT Phụ nữ TW, Phường Láng , Thành phố Hà Nội, Việt Nam
//                                 </span>

//                                 <span className="flex justify-end items-center">
//                                     <Link href="tel:0333666073" className="underline hover:no-underline hover:text-[#ff281c]">+84 333 666 073</Link>
//                                 </span>

//                                 <span className="flex justify-end items-center">
//                                     <Link href="#" className="underline hover:no-underline hover:text-[#ff281c]">email@example.com</Link>
//                                 </span>

//                                 <div className="flex justify-end items-center space-x-0.75 text-[#dbdbdb] text-[17px]">
//                                     <Link href="#">
//                                         <FontAwesomeIcon icon={faTwitter} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
//                                     </Link>
//                                     <Link href="#">
//                                         <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
//                                     </Link>
//                                     <Link href="#">
//                                         <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
//                                     </Link>
//                                 </div>
//                             </div>
//                             {/* <nav className="bg-white shadow px-6 py-4"> */}
//                             <nav className="flex-1 flex justify-end items-center space-x-15 py-4 font-semibold ">
//                                 <ul className={`flex space-x-10 ${isHome ? " text-gray-700" : ""}`} >

//                                     {menuData.map((menu) => {
//                                         return <MenuItem key={menu.id} menu={menu} isHome={isHome} />;
//                                     })}
//                                 </ul>
//                                 <Link href="tel:0333666073" className="cursor-pointer hidden xl:block">
//                                     <div className="bg-[#ff281c] flex justify-between items-center space-x-2 text-white rounded-full 
//                                 px-3.5 py-1.5 border border-[#ff281c] hover:bg-white hover:text-[#ff281c] 
//                                 transition-all duration-300 ease-in-out">
//                                         <FontAwesomeIcon icon={faPhoneVolume} shake />
//                                         <span>Liên hệ ngay</span>
//                                     </div>
//                                 </Link>
//                             </nav>

//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }

"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "@/app/(main)/components/menu-desktop-item";
// import { menuData } from "@/app/types/menu";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuAPI } from "@/app/utils/api";

export default function ExportHeader() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);




    const [menuData, setMenus] = useState<any[]>([]);
    useEffect(() => {
        MenuAPI.getTree().then(setMenus);
    }, []);

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // scroll xuống → ẩn header
                setShowHeader(false);
            } else {
                // scroll lên → hiện header
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <AnimatePresence>
            {showHeader && (
                <motion.header
                    className="w-full fixed top-0 z-50"
                    initial={{ y: -150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -150, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] py-12">

                        <div className="col-start-2 flex justify-between bg-white py-5 px-12 rounded-full shadow-2xl">
                            <Link href="/">
                                <Image
                                    className="z-0 dark:invert h-full object-cover"
                                    src="/images/Logo_LOGO MÀU CHUẨN.jpg"
                                    alt="Logo"
                                    width={100}
                                    height={20}
                                    priority
                                />
                            </Link>

                            <div className="flex-1 flex flex-col divide-y divide-[#f3f3f3]">
                                <div className={`${isHome ? "text-[#928e87] text-[12px] grid grid-cols-[3fr_1fr_1fr_1fr] py-1.75" : "hidden"}`}>
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
                                        <Link href="#"><FontAwesomeIcon icon={faTwitter} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" /></Link>
                                        <Link href="#"><FontAwesomeIcon icon={faFacebookF} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" /></Link>
                                        <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" /></Link>
                                    </div>
                                </div>

                                <nav className="flex-1 flex justify-end items-center space-x-15 py-4 font-semibold ">
                                    <ul className={`flex space-x-10 ${isHome ? " text-gray-700" : ""}`}>
                                        {menuData.map((menu) => (
                                            <MenuItem key={menu.id} menu={menu} isHome={isHome} />
                                        ))}
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
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
