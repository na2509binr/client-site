import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import StaticMap from "./map";

// shadow-[0_-4px_10px_rgba(0,0,0,0.06)]
export default function Footer() {
    return (
        <footer className="px-2 xl:grid xl:grid-cols-[1fr_8fr_1fr] 
        2xl:grid-cols-[1fr_4fr_1fr] bg-white py-5 lg:py-8 border-t border-[#eeeeee]" >

            <div className="col-start-2 grid grid-cols-1 lg:grid-cols-[5fr_2fr_5fr] gap-y-5 items-center mb-8">
                <div className="flex space-x-5">
                    <div className="bg-[#ff281c] px-2 py-3.5">
                        <Link href="/">
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

                    <div className="flex flex-col justify-around text-[13px] text-[#666666] py-3">
                        <span>
                            Số 39A phố Pháo Đài Láng, TT Phụ nữ TW, Phường Láng , Thành phố Hà Nội, Việt Nam
                        </span>

                        <span>
                            <a href="tel:0333666073" className="underline hover:no-underline hover:text-[#ff281c]">+84 333 666 073</a>
                        </span>

                        <span>
                            <a href="#" className="underline hover:no-underline hover:text-[#ff281c]">email@example.com</a>
                        </span>
                    </div>

                </div>

                <div className="hidden lg:flex justify-center items-center gap-x-2 text-[#dbdbdb] text-[20px] ">
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                    </a>
                </div>

                <div>
                    <StaticMap />
                </div>
            </div>

            <div className="col-start-2 flex flex-col lg:flex-row justify-between lg:items-center">
                <div className="order-3 lg:order-1 lg:col-start-1 text-center lg:text-start text-[#b4b4b4] text-[13px]">
                    <span className="2xl:block">
                        2019 Agro. All rights reserved.
                    </span>
                    <span className="pr-1">
                        Created by
                    </span>
                    <Link href="https://luatankhang.com/" className="text-[#4a8b71]">
                        Luật An Khang
                    </Link>
                </div>
                <div className="order-1 lg:order-2 lg:hidden 2xl:block">

                    <nav className="flex-1 flex justify-center lg:justify-end items-center lg:space-x-15 py-4 font-normal">
                        <ul className="flex flex-1 flex-col lg:flex-row space-x-10 list-disc list-inside lg:list-none">
                            <li>
                                <Link
                                    href="/"
                                    className="relative inline-block text-inherit transition-all duration-300 ease-in-out
                                    after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#ff281c] after:-mb-1 after:w-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#c2c2c2]" >
                                    Trang chủ
                                </Link>
                            </li>

                            <li>
                                <Link href="/about"
                                    className="relative inline-block text-inherit transition-all duration-300 ease-in-out
                                    after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#ff281c] after:-mb-1 after:w-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#c2c2c2]" >
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link href="/product"
                                    className="relative inline-block text-inherit transition-all duration-300 ease-in-out
                                    after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#ff281c] after:-mb-1 after:w-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#c2c2c2]" >
                                    Giới thiệu
                                </Link>
                            </li>

                            <li>
                                <Link href="/agency"
                                    className="relative inline-block text-inherit transition-all duration-300 ease-in-out
                                    after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#ff281c] after:-mb-1 after:w-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#c2c2c2]" >
                                    Phân phối
                                </Link>
                            </li>

                            <li>
                                <Link href="/new"
                                    className="relative inline-block text-inherit transition-all duration-300 ease-in-out
                                    after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#ff281c] after:-mb-1 after:w-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#c2c2c2]" >
                                    Tin tức
                                </Link>
                            </li>

                            <li>
                                <Link href="/export"
                                    className="relative inline-block text-inherit transition-all duration-300 ease-in-out
                                    after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:h-0.5 after:bg-[#ff281c] after:-mb-1 after:w-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#c2c2c2]" >
                                    Xuất khẩu
                                </Link>
                            </li>
                        </ul>

                        <div className="flex flex-1 lg:hidden flex-col">
                            <div className="flex justify-center items-center gap-x-2 text-[#dbdbdb] text-[20px] ">
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#ff281c] transition-all duration-300 ease-in-out" />
                                </a>

                            </div>
                                <div className="flex justify-center">
                                    <Link href="/">
                                        <Image
                                            className="dark:invert"
                                            src="/images/thong-bao-bo-cong-thuong.webp"
                                            alt="Logo"
                                            width={180}
                                            height={20}
                                            priority
                                        />
                                    </Link>
                                </div>

                        </div>
                    </nav>

                </div>
                <div className="hidden lg:block lg:order-3">
                    <Link href="/">
                        <Image
                            className="dark:invert"
                            src="/images/thong-bao-bo-cong-thuong.webp"
                            alt="Logo"
                            width={180}
                            height={20}
                            priority
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
