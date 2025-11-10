import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import AboutSubComponent from "./about-component";
import { partners } from "../../types/partner"
import SwiperPartner from "./swiper-partner";
import { members } from "../../types/member";
import SwiperMember from "./swiper-member";

export default function AboutPage() {
    return (
        <div>
            <div className="relative lg:h-[780px]">
                <Image
                    className="z-0 dark:invert h-full object-cover "
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full top-0  px-2 flex flex-col justify-center lg:grid lg:grid-cols-[1fr_2fr_3fr] items-center text-white">
                    <div className="col-start-2 ">
                        <h1 className="text-[40px] lg:text-[60px] font-extrabold">
                            <span className="block text-[30px] lg:text-[40px] font-extralight">GIỚI THIỆU</span>
                            <span className="">CÔNG TY</span>
                        </h1>
                        <p className="my-6 text-[13px] lg:text-[16px]">
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Giới thiệu</span>
                        </div>
                    </div>
                </div>
            </div>

            <AboutSubComponent />

            <div className="px-2 block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-12">
                <div className="col-start-2 text-center">
                    <div>
                        {/* <div className="flex flex-col"> */}

                        <h1 className="text-[30px] lg:text-[40px] font-thin text-center">
                            ĐỘI NGŨ
                            <span className="font-black pl-2">TRONG MƠ</span>
                        </h1>
                        <p className="text-[18px] text-[#b3b3b3] my-6.25 px-3 lg:px-60">
                            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                        {/* </div> */}

                        <div className="w-full max-w-6xl 2xl:max-w-7xl mb-8">
                            <SwiperMember members={members} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-12 bg-[#f5deb3]/30">
                <div className="col-start-2 text-center">
                    <h1 className="text-[30px] lg:text-[40px] font-black  text-center">
                        ĐỐI TÁC
                    </h1>
                    <p className="text-[18px] text-[#b3b3b3] my-6.25 px-3 lg:px-60">
                        Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    </p>

                    <div className="w-full max-w-6xl 2xl:max-w-7xl mb-8">
                        <SwiperPartner partner={partners} />
                    </div>
                </div>
            </div>

        </div>
    );
}