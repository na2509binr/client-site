"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import Link from "next/link";
import { Member } from "../types/member";

interface ListMemberProps {
    members: Member[];
}

export default function SwiperMember({ members }: ListMemberProps) {
    const [is2xl, setIs2xl] = useState(false);

    // detect màn 2xl trở lên
    useEffect(() => {
        const handleResize = () => setIs2xl(window.innerWidth >= 1536);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const chunkSize = 8;
    const slides2xl: Member[][] = [];
    for (let i = 0; i < members.length; i += chunkSize) {
        slides2xl.push(members.slice(i, i + chunkSize));
    }

    const renderSlide2xl = (slideItems: Member[], idx: number) => (
        <SwiperSlide key={idx}>
            <div className="grid grid-cols-3 gap-8">
                {slideItems.map((p) => (
                    <div key={p.id} className="relative flex flex-col group overflow-visible">

                        {/* IMAGE */}
                        <div className="overflow-hidden">
                            <Image
                                className="object-cover h-[250px] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                src={p.image}
                                alt={p.name}
                                width={400}
                                height={250}
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="bg-white mx-5 -mt-10 px-5 pt-10 text-center z-10
                                                      transform transition-transform duration-300 ease-in-out 
                                                      group-hover:-translate-y-8">
                            <h2 className="font-bold text-[#333333] text-[18px]">{p.name}</h2>

                            <p className="mt-2.5 mb-5 text-[#DDC051] text-[13px]">
                                {p.department.toUpperCase()}
                            </p>

                        </div>
                    </div>


                ))}
            </div>
        </SwiperSlide>
    );


    const renderSlideMobile = (p: Member) => (
        <SwiperSlide key={p.id}>
            <div key={p.id} className="relative flex flex-col group overflow-visible">

                {/* IMAGE */}
                <div className="overflow-hidden">
                    <Image
                        className="object-cover h-[250px] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        src={p.image}
                        alt={p.name}
                        width={400}
                        height={250}
                    />
                </div>

                {/* CONTENT */}
                <div className="bg-white mx-5 -mt-10 px-5 pt-10 text-center z-10
                                                      transform transition-transform duration-300 ease-in-out 
                                                      group-hover:-translate-y-8">
                    <h2 className="font-bold text-[#333333] text-[18px]">{p.name}</h2>

                    <p className="mt-2.5 mb-5 text-[#DDC051] text-[13px]">
                        {p.department.toUpperCase()}
                    </p>

                </div>
            </div>
        </SwiperSlide>
    );


    return (
        <div className="my-8">
            {is2xl ? (
                <Swiper
                    className="swiperListProduct"
                    modules={[Navigation, Pagination]}
                    autoplay={{ delay: 10000 }}
                    spaceBetween={20}
                >
                    {slides2xl.map(renderSlide2xl)}
                </Swiper>
            ) : (
                <Swiper
                    className="swiperListProduct"
                    modules={[Navigation, Pagination]}
                    navigation
                    loop={true}
                    autoplay={{ delay: 100 }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                        1536: { slidesPerView: 1 },
                    }}
                >
                    {members.map(renderSlideMobile)}
                </Swiper>
            )}
        </div>
    );
};

