"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { New } from "../../types/new";

interface ListNewProps {
  news: New[];
}

export default function SwiperNews({ news }: ListNewProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 6900 }}
      loop={true}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 3 }
      }}
      className="mySwiper"
    >
      {news.map((n) => {
        const d = new Date(n.createDate);
        const day = d.getDate();
        const month = d.toLocaleString("en", { month: "short" });

        return (
          <SwiperSlide key={n.id}>
            <div className="relative flex flex-col group overflow-visible">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  className="object-cover h-[250px] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={n.image}
                  alt={n.title}
                  width={400}
                  height={250}
                />
              </div>

              {/* CONTENT */}
              <div className="bg-[#fbf5e8] mx-5 -mt-10 px-5 pt-10 text-center z-10
                              transform transition-transform duration-300 ease-in-out 
                              group-hover:-translate-y-8">
                <Link href={n.url ?? "#"} className="hover:text-[#ff281c] transition-all">
                  <h2 className="font-bold text-[18px]">{n.title}</h2>
                </Link>

                <p className="mt-2.5 mb-5 text-[#666666] text-[14px]">
                  {n.description}
                </p>

                <div className="flex justify-center">
                  <div className="border-2 border-[#ff281c] px-9.5 py-3.5 font-semibold rounded-full 
                                  group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out">
                    <Link
                      href={n.url ?? "#"}
                      className="text-[#4F4A37] group-hover:text-white transition-all"
                    >
                      CHI TIẾT
                    </Link>
                  </div>
                </div>
              </div>

              {/* DATE BADGE */}
              <div className="absolute font-bold bg-[#FCDB5A] left-5 px-4.25 py-3.25">
                <div className="flex flex-col justify-center items-center">
                  <span className="text-[25px] font-black">{day}</span>
                  <span className="text-[12px] text-[#9A8841]">{month}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}



// "use client";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { useEffect, useRef } from "react";

// import { New } from "./types/new";

// interface ListNewProps {
//   news: New[];
// }

// export default function ListNews({ news }: ListNewProps) {
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-flip-card");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     cardRefs.current.forEach((el) => el && observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         autoplay={{ delay: 6900 }}
//         loop={true}
//         spaceBetween={30}
//         slidesPerView={3}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1280: { slidesPerView: 3 },
//         }}
//         className="mySwiper"
//       >
//         {news.map((n, index) => {
//           const d = new Date(n.createDate);
//           const day = d.getDate();
//           const month = d.toLocaleString("en", { month: "short" });

//           return (
//             <SwiperSlide key={n.id}>
//               <div
//                 className="relative flex flex-col group overflow-visible opacity-0"
//               >
//                 {/* IMAGE */}
//                 <div className="overflow-hidden">
//                   <Image
//                     className="object-cover h-[250px] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
//                     src={n.image}
//                     alt={n.title}
//                     width={400}
//                     height={250}
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div
//                   className="bg-[#fbf5e8] mx-5 -mt-10 px-5 pt-10 text-center z-10
//                   transform transition-transform duration-300 ease-in-out 
//                   group-hover:-translate-y-8"
//                 >
//                   <Link
//                     href={n.url ?? "#"}
//                     className="hover:text-[#ff281c] transition-all"
//                   >
//                     <h2 className="font-bold text-[18px]">{n.title}</h2>
//                   </Link>

//                   <p className="mt-2.5 mb-5 text-[#666666] text-[14px]">
//                     {n.description}
//                   </p>

//                   <div className="flex justify-center">
//                     <div
//                       className="border-2 border-[#ff281c] px-9.5 py-3.5 font-semibold rounded-full 
//                     group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out"
//                     >
//                       <Link
//                         href={n.url ?? "#"}
//                         className="text-[#4F4A37] group-hover:text-white transition-all"
//                       >
//                         CHI TIẾT
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                 {/* DATE BADGE */}
//                 <div className="absolute font-bold bg-[#FCDB5A] left-5 px-4.25 py-3.25">
//                   <div className="flex flex-col justify-center items-center">
//                     <span className="text-[25px] font-black">{day}</span>
//                     <span className="text-[12px] text-[#9A8841]">{month}</span>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </>
//   );
// }
