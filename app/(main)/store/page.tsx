"use client"

import { stores, Store } from "@/app/types/store";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../components/dropdownlist";
import CityWardDropdown from "../components/dropdownlist";
import { useState } from "react";
import StoreList from "./list-store";



export default function StoresPage() {
    const wardsByCity = stores.reduce((acc: Record<string, string[]>, store) => {
        if (!acc[store.city]) {
            acc[store.city] = [];
        }
        if (!acc[store.city].includes(store.ward)) {
            acc[store.city].push(store.ward);
        }
        return acc;
    }, {});


    const [city, setCity] = useState("");
    const [ward, setWard] = useState("");

    const filteredStores = stores.filter((s) => {
        if (city && s.city !== city) return false;
        if (ward && s.ward !== ward) return false;
        return true;
    });


    return (
        <>
            <div className="relative lg:h-[600px]">
                <Image
                    className="z-0 dark:invert h-full object-cover "
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
                            <span className="">CỬA HÀNG</span>
                        </h1>
                        {/* <p className="my-6 text-[13px] lg:text-[16px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p> */}
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
                        <div className="bg-[#569f56] rounded-md p-10">
                            <h2 className="text-[20px] text-amber-100">Chọn cửa hàng theo Tỉnh/Thành phố</h2>
                            <div className="my-3">
                                <CityWardDropdown data={wardsByCity} onChange={(c, w) => {
                                    setCity(c);
                                    setWard(w);
                                }} />
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
                </div>
            </div>
        </>
    );
}
