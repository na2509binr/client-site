"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Product } from "../../types/product";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import Link from "next/link";
import { toSlug } from "../../utils/slug";

interface ListProductProps {
    products: Product[];
}

export default function SwiperProduct({ products }: ListProductProps) {
    const [is2xl, setIs2xl] = useState(false);

    // detect màn 2xl trở lên
    useEffect(() => {
        const handleResize = () => setIs2xl(window.innerWidth >= 1536);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const chunkSize = 8;
    const slides2xl: Product[][] = [];
    for (let i = 0; i < products.length; i += chunkSize) {
        slides2xl.push(products.slice(i, i + chunkSize));
    }

    const renderSlide2xl = (slideItems: Product[], idx: number) => (
        <SwiperSlide key={idx}>
            <div className="grid grid-cols-4 gap-8 items-stretch">
                {slideItems.map((product) => (

                    <div
                        key={product.id}
                        className="flex flex-col bg-white border border-[#e5e5e5] overflow-hidden"
                    >
                        <div className="relative w-full aspect-4/3">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover p-2"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                priority={false}
                            />
                        </div>
                        <div className="px-5 pb-8 pt-3">
                            <h3 className="text-[20px] font-semibold">{product.name}</h3>
                            <div className="text-sm mt-5 mb-2.5">
                                <span className="text-black text-[20px] font-bold mr-2">
                                    {product.price.toLocaleString()} đ
                                </span>
                                <span className="line-through text-red-600 text-[14px]">
                                    {product.salePrice.toLocaleString()} đ
                                </span>
                            </div>
                            <Link
                                href={"/product/" + toSlug(product.name)}
                                className="inline-block mt-3 px-4 py-2 text-[12px] text-[#ff281c] border-2 border-[#ff281c] rounded-md hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out"
                            >
                                XEM CHI TIẾT
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </SwiperSlide>
    );


    const renderSlideMobile = (product: Product) => (
        <SwiperSlide key={product.id} className="h-auto!">
            <div className="flex flex-col h-full bg-white border border-[#e5e5e5] overflow-hidden">
                <div className="relative w-full aspect-4/3">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover p-2"
                        sizes="100vw"
                        priority={false}
                    />
                </div>
                <div className="px-5 pb-8 pt-3">
                    <h3 className="text-[20px] font-semibold">{product.name}</h3>
                    {/* <div className="text-sm mt-5 mb-2.5">
                        <span className="text-black text-[20px] font-bold mr-2">
                            {product.price.toLocaleString()} đ
                        </span>
                        <span className="line-through text-red-600 text-[14px]">
                            {product.salePrice.toLocaleString()} đ
                        </span>
                    </div> */}
                    <Link
                        href={"/product/" + toSlug(product.name)}
                        className="inline-block mt-3 px-4 py-2 text-[12px] text-[#ff281c] border-2 border-[#ff281c] rounded-md hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out"
                    >
                        XEM CHI TIẾT
                    </Link>
                </div>
            </div>
        </SwiperSlide>
    );


    return (
        <div className="my-8">
            {/* {is2xl ? (
                <Swiper
                    className="swiperListProduct"
                    modules={[Navigation, Pagination]}
                    navigation
                    autoplay={{ delay: 100 }}
                    loop={true}
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
                        1536: { slidesPerView: 5 },
                    }}
                >
                    {products.map(renderSlideMobile)}
                </Swiper>
            )} */}

            <Swiper
                className="swiperListProduct"
                modules={[Navigation, Pagination]}
                navigation
                // loop={true}
                autoplay={{ delay: 100 }}
                spaceBetween={20}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                    1536: { slidesPerView: 5 },
                }}
            >
                {products.map(renderSlideMobile)}
            </Swiper>
        </div>
    );
};