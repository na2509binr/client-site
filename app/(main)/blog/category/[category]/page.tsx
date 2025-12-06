// "use client"; // nếu bạn muốn client-side, không thì bỏ

// import { useParams } from 'next/navigation';

// export default function CategoryPage() {


//   return (
//     <div>
//       <h1>Bài viết theo thể loại: {category}</h1>
//       {/* render danh sách bài viết theo category */}
//     </div>
//   );
// }


"use client"

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { NewsAPI } from "@/app/utils/api";
import { useParams } from "next/navigation";
import NewsList from "../../list-news";

export default function CategoryPage() {
    const params = useParams();
    const category = params.category?.toString(); // đây là giá trị từ URL

    const [news, setNews] = useState<any[]>([]);
    // Load products theo cateId
    useEffect(() => {
        if (category) {
            NewsAPI.GetNewsByCategoryNewId(category).then((data) => {
                setNews(data as any[]);
            });
        }
    }, [category]);   // ⭐ mỗi lần cateId đổi → gọi lại API

console.log("Category:", category);
console.log("News:", news);
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
                    {news && news.length > 0 ? (
                        <NewsList data={news} />
                    ) : (
                        <div className="text-center text-gray-500 px-3 py-5 border border-gray-300 rounded-lg shadow-lg">
                            Không có bản ghi nào
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
}