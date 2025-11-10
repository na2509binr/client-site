"use client"

import "../globals.css";
import { products } from "../types/product";
import { news } from "../types/new";
import Banner from "./components/banner";
import Link from "next/link";
import Image from "next/image";
import AboutSubComponent from "./about/about-component";
import SwiperProduct from "./components/swiper-product";
import SwiperNews from "./components/swiper-news";

export default function Home() {
  return (
    <main>
      <Banner />

      <AboutSubComponent/>


      <div className="px-2 pb-10 lg:pb-0 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-[#f5deb3]/30">
        {/* <div className="col-start-2 w-full"> */}
        <div className="col-start-2 w-full">
          <h1 className="text-[35px] lg:text-[40px] font-thin pt-8 mb-12">
            SẢN PHẨM
            <span className="font-bold pl-2">ĐÓNG TÚI</span>
          </h1>

          <div className="w-full max-w-6xl 2xl:max-w-7xl">
            <SwiperProduct products={products} />
          </div>
        </div>
      </div>

      <div className="px-2 pb-10 lg:pb-0 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
        <div className="col-start-2 w-full">
          <h1 className="text-[35px] lg:text-[40px] font-thin mt-8 mb-12">
            SẢN PHẨM
            <span className="font-bold pl-2">BÁN SỈ</span>
          </h1>

          <div className="w-full max-w-6xl 2xl:max-w-7xl">
            <SwiperProduct products={products} />
          </div>
        </div>
      </div>

      <div className="px-2 pb-15 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] bg-[#f5deb3]/30">

        <div className="col-start-2 w-full">

          <h1 className="text-[35px] lg:text-[40px] font-thin pt-20 mb-12 text-center">
            TIN TỨC
            <span className="font-bold pl-2">NỔI BẬT</span>
          </h1>

          <div className="w-full max-w-6xl 2xl:max-w-7xl mb-8">
            <SwiperNews news={news}/>
          </div>
        </div>

      </div>
    </main>



  );
}
