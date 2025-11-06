import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
    "/images/banner-1.webp",
    "/images/banner-2.webp",
    "/images/banner-3.webp",
];

export default function Banner() {
    return (
        <div >

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                // autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full h-[450px] lg:h-[700px]"
                
            >
                <SwiperSlide>
                    {/* <Image src="/images/banner-1.webp" alt="Banner 1" sizes="100vw" fill className="object-cover" /> */}
                    <Image src="/images/banner-1.webp" alt="Banner 1" fill className="object-cover" priority={true}/>
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src="/images/banner-2.webp" alt="Banner 2" sizes="100vw" fill className="object-cover" /> */}
                    <Image src="/images/banner-2.webp" alt="Banner 2" fill className="object-cover" priority={true}/>
                </SwiperSlide>

                <SwiperSlide>
                    {/* <Image src="/images/banner-3.webp" alt="Banner 3" sizes="100vw" fill className="object-cover" /> */}
                    <Image src="/images/banner-3.webp" alt="Banner 3" fill className="object-cover" priority={true} />
                </SwiperSlide>
            </Swiper>

            <div className="w-full my-3.75">
                <div className="hidden lg:flex w-full h-[280px] gap-4 px-3">
                    {images.map((img, i) => (
                        <div key={i} className="relative flex-1">
                            {/* <Image src={img} alt={`Banner ${i}`} sizes="(min-width: 1024px) 25vw, 100vw" fill className="object-cover" /> */}
                            <Image src={img} alt={`Banner ${i}`} fill className="object-cover" priority={true}/>
                        </div>
                    ))}
                </div>

                <div className="block lg:hidden px-2">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        // navigation
                        // pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        spaceBetween={20}
                        className="w-full h-[200px] lg:h-[700px] px-"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            }
                        }}
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative w-full h-[200px]">
                                    {/* <Image src={img} alt={`Banner ${i}`} sizes="100vw" fill className="object-cover rounded-xl" /> */}
                                    <Image src={img} alt={`Banner ${i}`} fill className="object-cover rounded-xl" priority={true}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}