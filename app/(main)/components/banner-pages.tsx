import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";


export default function BannerPages() {
    return (
        <>
            <div className="relative h-[780px]">
                <Image
                    className="z-0 dark:invert h-full object-cover "
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full top-0 grid grid-cols-[1fr_2fr_3fr] items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[60px] font-extrabold">
                            <span className="block text-[40px] font-extralight">SẢN PHẨM</span>
                            <span className="">TIÊU BIỂU</span>
                        </h1>
                        <p className="my-6 ">
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Giới thiệu</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}