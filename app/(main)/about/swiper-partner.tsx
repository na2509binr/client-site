"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Partner } from "../../types/partner";


interface ListPartnerProps {
    partner: Partner[];
}

export default function SwiperPartner({ partner }: ListPartnerProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
                1440: { slidesPerView: 5 }
            }}

        >
            {partner.map((n) => {
                return (
                    <SwiperSlide key={n.id} >
                        <div className="flex justify-center items-center">

                            <Image
                                className="dark:invert"
                                src={n.image}
                                alt={n.name}
                                width={72}
                                height={20}
                                priority
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
