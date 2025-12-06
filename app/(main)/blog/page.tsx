"use client"

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import NewsList from "./list-news";
import { useEffect, useState } from "react";
// import { news } from "../../types/new";
import { NewsAPI } from "@/app/utils/api";

export default function BlogPage() {
    const [news, setNews] = useState<any[]>([]);
    useEffect(() => {
        NewsAPI.getAll().then(setNews);
    }, []);


    return (
        <div>
            <div className="relative h-[780px]">
                <Image
                    className="z-0 dark:invert h-full object-cover"
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
                            <span className="block text-[40px] font-extralight">CHIA SẺ</span>
                            <span className="">KINH NGHIỆM</span>
                        </h1>
                        <p className="my-6 ">
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Tin tức</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-16 bg-[#f5deb3]/30">
                <div className="col-start-2">
                    <NewsList data={news} />
                </div>
            </div>

        </div>
    );
}