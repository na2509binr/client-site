// "use client"

// // import { stores, Store } from "@/app/types/store";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import Dropdown from "../components/dropdownlist";
// import CityWardDropdown from "../components/dropdownlist";
// import { useEffect, useState } from "react";
// import StoreList from "./list-store";
// import { StoreAPI } from "@/app/utils/api";



// export default function StoresPage() {
//     const [stores, setStores] = useState<any[]>([]);

//     useEffect(() => {
//         StoreAPI.getAll().then(setStores);
//     }, []);


//     const wardsByCity = stores.reduce((acc: Record<string, string[]>, store) => {
//         if (!acc[store.city]) {
//             acc[store.city] = [];
//         }
//         if (!acc[store.city].includes(store.ward)) {
//             acc[store.city].push(store.ward);
//         }
//         return acc;
//     }, {});


//     const [city, setCity] = useState("");
//     const [ward, setWard] = useState("");

//     const filteredStores = stores.filter((s) => {
//         if (city && s.city !== city) return false;
//         if (ward && s.ward !== ward) return false;
//         return true;
//     });


//     return (
//         <>
//             <div className="relative lg:h-[600px]">
//                 <Image
//                     className="z-0 dark:invert h-full object-cover "
//                     src="/images/about-bg.jpg"
//                     alt="Logo"
//                     width={1900}
//                     height={20}
//                     priority
//                 />
//                 <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

//                 <div className="absolute h-full w-full top-0 px-2 flex flex-col justify-center items-start lg:grid grid-cols-[1fr_2fr_3fr] lg:items-center text-white">
//                     <div className="col-start-2">
//                         <h1 className="text-[40px] lg:text-[60px] font-extrabold">
//                             <span className="block text-[30px] lg:text-[40px] font-extralight">HỆ THỐNG</span>
//                             <span className="">CỬA HÀNG</span>
//                         </h1>
//                         {/* <p className="my-6 text-[13px] lg:text-[16px]">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                         </p> */}
//                         <div className="text-[13px] font-semibold flex items-center space-x-0.75">
//                             <Link href="/" className="text-[#b3e53f]">
//                                 <span>Trang chủ</span>
//                             </Link>
//                             <FontAwesomeIcon icon={faAngleRight} />
//                             <span>Phân phối</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <div className="px-2 py-20 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
//                 <div className="col-start-2 w-full">
//                     <h1 className="text-[40px] font-bold text-center pb-8">Hệ thống cửa hàng</h1>
//                     <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
//                         <div className="grid grid-rows-1 gap-4">
//                             <div className="bg-[#569f56] rounded-md p-10">

//                                 <h2 className="text-[20px] text-amber-100">Chọn cửa hàng theo Tỉnh/Thành phố</h2>
//                                 <div className="my-3">
//                                     <CityWardDropdown data={wardsByCity} onChange={(c, w) => {
//                                         setCity(c);
//                                         setWard(w);
//                                     }} />
//                                 </div>
//                                 <p className="text-amber-100 my-5">
//                                     Quý khách có thể an tâm mua hàng trực tiếp tại các điểm bán được xác nhận trong danh sách của chúng tôi, trong trường hợp không có điểm bán phù hợp quý khách có thể đặt hàng trực tiếp qua website và chúng tôi sẽ gửi hàng tận nơi.
//                                     Hotline: 1900 638 900
//                                 </p>
//                             </div>
//                             <div className="grid grid-rows-1 divide-y divide-[#eeeeee] gap-y-3">
//                                 <StoreList data={filteredStores} />
//                             </div>
//                         </div>

//                         <div className="grid grid-rows-1 divide-y divide-[#eeeeee] gap-y-3">
//                             {/* Thêm 1 component List New ở đây  */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }








"use client"

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CityWardDropdown from "../components/dropdownlist";
import { useEffect, useState } from "react";
import StoreList from "./list-store";
import { StoreAPI } from "@/app/utils/api";

// ✅ Type cho News
type News = {
    id: number;
    title: string;
    description: string;
    image: string;
    storeId: number | null;
    createdAt: string;
};

export default function StoresPage() {
    const [stores, setStores] = useState<any[]>([]);
    const [news, setNews] = useState<News[]>([]);  // ✅ State news
    const [city, setCity] = useState("");
    const [ward, setWard] = useState("");

    // Fetch stores
    useEffect(() => {
        StoreAPI.getAll().then(setStores);
    }, []);

    // ✅ Fetch news
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/new/get-all`);
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const wardsByCity = stores.reduce((acc: Record<string, string[]>, store) => {
        if (!acc[store.city]) {
            acc[store.city] = [];
        }
        if (!acc[store.city].includes(store.ward)) {
            acc[store.city].push(store.ward);
        }
        return acc;
    }, {});

    // Filter stores theo city/ward
    const filteredStores = stores.filter((s) => {
        if (city && s.city !== city) return false;
        if (ward && s.ward !== ward) return false;
        return true;
    });

    // ✅ Lấy danh sách storeIds từ filteredStores
    const filteredStoreIds = filteredStores.map((s) => s.id);

    // ✅ Filter news theo storeIds
    const filteredNews = news.filter((n) => {
        // Chỉ lấy bài viết có storeId
        if (!n.storeId) return false;
        
        // Nếu không filter city/ward -> hiển thị tất cả bài viết có store
        if (!city && !ward) return true;
        
        // Filter theo stores đã lọc
        return filteredStoreIds.includes(n.storeId);
    });

    return (
        <>
            <div className="relative lg:h-[600px]">
                <Image
                    className="z-0 dark:invert h-full object-cover"
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full w-full top-0 px-2 flex flex-col justify-center items-start lg:grid grid-cols-[1fr_2fr_3fr] lg:items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[40px] lg:text-[60px] font-extrabold">
                            <span className="block text-[30px] lg:text-[40px] font-extralight">HỆ THỐNG</span>
                            <span>CỬA HÀNG</span>
                        </h1>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Phân phối</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 py-20 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
                <div className="col-start-2 w-full">
                    <h1 className="text-[40px] font-bold text-center pb-8">Hệ thống cửa hàng</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
                        {/* LEFT: Filter + Store List */}
                        <div className="grid grid-rows-1 gap-4">
                            <div className="bg-[#569f56] rounded-md p-10">
                                <h2 className="text-[20px] text-amber-100">Chọn cửa hàng theo Tỉnh/Thành phố</h2>
                                <div className="my-3">
                                    <CityWardDropdown
                                        data={wardsByCity}
                                        onChange={(c, w) => {
                                            setCity(c);
                                            setWard(w);
                                        }}
                                    />
                                </div>
                                <p className="text-amber-100 my-5">
                                    Quý khách có thể an tâm mua hàng trực tiếp tại các điểm bán được xác nhận trong danh sách của chúng tôi, trong trường hợp không có điểm bán phù hợp quý khách có thể đặt hàng trực tiếp qua website và chúng tôi sẽ gửi hàng tận nơi.
                                    Hotline: 1900 638 900
                                </p>
                            </div>
                            <div className="grid grid-rows-1 divide-y divide-[#eeeeee] gap-y-3">
                                <StoreList data={filteredStores} />
                            </div>
                        </div>

                        {/* ✅ RIGHT: News List */}
                        <div className="space-y-4">
                            {/* <h2 className="text-2xl font-bold text-green-700">
                                Tin tức cửa hàng
                                {city && <span className="text-base font-normal text-gray-500 ml-2">({city}{ward && ` - ${ward}`})</span>}
                            </h2> */}

                            {filteredNews.length === 0 ? (
                                <div className="text-gray-500 py-10 text-center bg-gray-50 rounded-lg">
                                    {city || ward
                                        ? "Không có bài viết nào cho khu vực này"
                                        : "Chưa có bài viết nào"}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredNews.map((item) => {
                                        // Tìm store name
                                        const store = stores.find((s) => s.id === item.storeId);
                                        
                                        return (
                                            <Link
                                                key={item.id}
                                                href={`/news/${item.id}`}
                                                className="group block bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                                            >
                                                {/* Image */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={item.image || "/images/placeholder.jpg"}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="p-4">
                                                    {/* Store badge */}
                                                    {store && (
                                                        <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">
                                                            📍 {store.name}
                                                        </span>
                                                    )}

                                                    <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                                        {item.description?.replace(/<[^>]*>/g, "").slice(0, 100)}...
                                                    </p>

                                                    <div className="text-xs text-gray-400 mt-3">
                                                        {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
