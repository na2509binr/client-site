"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toSlug } from "@/app/utils/slug";

export default function ProductDetailClient({
    product,
    category,
    images,
}: {
    product: any;
    category: any;
    images: string[];
}) {
    const [activeImage, setActiveImage] = useState(images[0]);

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

                <div className="absolute h-full top-0 px-2 flex flex-col justify-center lg:grid grid-cols-[1fr_2fr_3fr] items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[40px] lg:text-[60px] font-extrabold">
                            {product.name.toUpperCase()}
                        </h1>

                        {/* <p classNamse="my-6 text-[13px] lg:text-[16px]">{product.description}</p> */}

                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                Trang chủ
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />

                            <Link href="/product" className="text-[#b3e53f]">
                                Sản phẩm
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />

                            <Link
                                href={"/product/" + toSlug(category.name)}
                                className="text-[#b3e53f]"
                            >
                                {category.name}
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />

                            <span>{product.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ MAIN CONTENT */}
            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
                <div className="col-start-2 ">
                    <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* ✅ LEFT: Thumbnail List */}
                        <div className="row-start-2 lg:row-start-1 lg:col-start-1  lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(img)}
                                    className={`border rounded overflow-hidden w-20 h-28 shrink-0 ${activeImage === img ? "border-2 border-green-600" : "border-gray-300"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt="Thumbnail"
                                        width={200}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* ✅ CENTER: Main Image */}
                        <div className="col-start-1 lg:row-start-1 lg:col-start-2 lg:col-span-5 flex justify-center">
                            <div className="rounded-lg p-4 max-h-[600px]">
                                <Image
                                    src={activeImage}
                                    alt="Main Product"
                                    width={600}
                                    height={800}
                                    className="object-contain max-h-[560px] mx-auto rounded-lg"
                                />
                            </div>
                        </div>

                        {/* ✅ RIGHT: Product Info */}
                        <div className="lg:col-span-5">
                            <h1 className="text-2xl font-bold text-gray-800 leading-snug">
                                Gạo Lứt Tím đóng túi 1KG Vinh Hiển – Đạt chuẩn HACCP – Ngọt cơm, dinh dưỡng
                            </h1>

                            {/* <div className="text-red-600 mt-3 text-xl font-bold">Liên hệ</div> */}
                            <div className="flex my-4">

                                <Link href="tel:0333666073" className="cursor-pointer hidden xl:block">
                                    <div className="bg-[#ff281c] flex justify-between items-center space-x-2 text-white rounded-full 
                                px-8 py-2.5 border-2 border-[#ff281c] hover:bg-white hover:text-[#ff281c] 
                                transition-all duration-300 ease-in-out">
                                        <span className="font-bold">LIÊN HỆ</span>
                                    </div>
                                </Link>
                            </div>

                            {/* Description */}
                            <div className="mt-5 space-y-4 text-gray-700">
                                <h2 className="text-lg font-bold text-green-700">Mô tả</h2>
                                <p className="px-5 py-2.5 border-l-5 border-[#eeeeee]">
                                    Công ty <strong>CỔ PHẦN VINH HIỂN FARM</strong> xin công bố sản phẩm mới
                                    – <strong>Gạo Lứt Tím Vinh Hiển Túi 1kg</strong> – Đạt chuẩn HACCP.
                                </p>

                                <h2 className="text-lg font-bold text-green-700">Câu chuyện ra đời</h2>
                                <p>
                                    Gạo Lứt Tím được chọn lọc từ giống lúa đặc biệt, giữ nguyên lớp cám.
                                </p>

                                <h2 className="text-lg font-bold text-green-700">Đặc tính sản phẩm</h2>
                                <ul className="list-disc ml-5 space-y-2">
                                    <li>Mùi thơm nhẹ, đậm đà, mềm, dẻo.</li>
                                    <li>Cơm ngọt, giàu dinh dưỡng.</li>
                                    <li>Nấu được nhiều món: cơm, cháo, cơm niêu.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
