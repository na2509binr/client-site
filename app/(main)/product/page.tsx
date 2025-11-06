import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import Link from "next/link";

export default function ProductPage() {
    return (
        <>
            <div className="relative h-[780px]">
                <Image
                    className="z-0 dark:invert h-full object-cover "
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full top-0 grid grid-cols-[1fr_2fr_3fr] items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[60px] font-extrabold">
                            <span className="block text-[40px] font-extralight">SẢN PHẨM</span>
                            <span className="">TIÊU BIỂU</span>
                        </h1>
                        <p className="my-6 ">
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Sản phẩm</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
                <div className="col-start-2 grid grid-cols-[2fr_1fr] items-center gap-x-10 my-30">
                    <div className="px-20">
                        <h2 className="text-[40px] font-black">
                            AGRO FARM
                            <span className="font-thin pl-2">ECOLOGY PRODUCTS</span>
                        </h2>
                        <p className="text-[14px] text-[#666] my-6.25">
                            <strong>

                                Agro is a high-quality service, innovative technologies and a wide product range that meet the requirements of modern farmers. Speсtr-Agro is a united team of high-class professionals working for the growth and development of the agricultural business in USA.
                            </strong>
                        </p>
                        <p className="text-[14px] text-[#666]">
                            When the baby greens are ready for harvest, timing and temperature rule the day. And at the perfect moment, the race begins. During the hotter summer months, Earthbound Farm laborers start their day at 3 a.m., harvesting the baby leaves before the temperature reaches 80 degrees, at which point the leaves become too soft to pick. Stan Pura, director of farm operations and one of Earthbound Farm’s partners, designed a unique baby-lettuce harvester that picks easily-torn baby greens quickly and consistently. Working in a pattern of overlapping rings, eight people variously direct and drive the machine and put the mechanically picked greens into plastic totes. The harvesting machine has a continuous looping blade that goes through a sharpener with each rotation. After the machine cuts the leaves, it blows them onto a mesh grid that allows small leaves and rocks to fall through.
                        </p>
                    </div>
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/img-1.webp"
                        alt="Logo"
                        width={350}
                        height={20}
                        priority
                    />
                </div>
            </div>


            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] pb-10">
                <div className="col-start-2 grid grid-cols-2 items-center gap-x-10">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/img-2.jpg"
                        alt="Logo"
                        width={800}
                        height={20}
                        priority
                    />
                    <div className="px-20">
                        <h2 className="text-[30px] font-black">
                            THE CROPS
                        </h2>
                        <p className="text-[14px] text-[#666] my-5">
                            Evulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus soaking mouthwatering. First superior full-bodied drink. Like outstanding odor economical deal clinically. Odor to yummy high racy bonus soaking
                        </p>

                        <Link href="/" className="mt-5 border-2 border-[#ff281c] px-5.5 py-2 font-semibold rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out">
                            ĐỌC THÊM
                        </Link>
                    </div>

                </div>
                <div className="flex justify-end items-center -ml-20">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/bg-1.png"
                        alt="Logo"
                        width={300}
                        height={20}
                        priority
                    />
                </div>
            </div>
            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] pb-10">
                <div className="flex justify-start items-center -ml-16">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/bg-2.png"
                        alt="Logo"
                        width={300}
                        height={20}
                        priority
                    />
                </div>
                <div className="col-start-2 grid grid-cols-2 items-center gap-x-10">

                    <div className="px-20">
                        <h2 className="text-[30px] font-black">
                            THE CROPS
                        </h2>
                        <p className="text-[14px] text-[#666] my-5">
                            Evulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus soaking mouthwatering. First superior full-bodied drink. Like outstanding odor economical deal clinically. Odor to yummy high racy bonus soaking
                        </p>

                        <Link href="/" className="mt-5 border-2 border-[#ff281c] px-5.5 py-2 font-semibold rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out">
                            ĐỌC THÊM
                        </Link>
                    </div>
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/img-3.jpg"
                        alt="Logo"
                        width={800}
                        height={20}
                        priority
                    />
                </div>

            </div>
            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] pb-10">
                <div className="col-start-2 grid grid-cols-2 items-center gap-x-10">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/img-4.jpg"
                        alt="Logo"
                        width={800}
                        height={20}
                        priority
                    />
                    <div className="px-20">
                        <h2 className="text-[30px] font-black">
                            THE CROPS
                        </h2>
                        <p className="text-[14px] text-[#666] my-5">
                            Evulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus soaking mouthwatering. First superior full-bodied drink. Like outstanding odor economical deal clinically. Odor to yummy high racy bonus soaking
                        </p>

                        <Link href="/" className="mt-5 border-2 border-[#ff281c] px-5.5 py-2 font-semibold rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out">
                            ĐỌC THÊM
                        </Link>
                    </div>

                </div>
                <div className="flex justify-end items-center -mr-11">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/bg-1.png"
                        alt="Logo"
                        width={300}
                        height={20}
                        priority
                    />
                </div>
            </div>

            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] pb-10">
                <div className="flex justify-start items-center -ml-16">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/bg-2.png"
                        alt="Logo"
                        width={300}
                        height={20}
                        priority
                    />
                </div>
                <div className="col-start-2 grid grid-cols-2 items-center gap-x-10">

                    <div className="px-20">
                        <h2 className="text-[30px] font-black">
                            THE CROPS
                        </h2>
                        <p className="text-[14px] text-[#666] my-5">
                            Evulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus soaking mouthwatering. First superior full-bodied drink. Like outstanding odor economical deal clinically. Odor to yummy high racy bonus soaking
                        </p>

                        <Link href="/" className="mt-5 border-2 border-[#ff281c] px-5.5 py-2 font-semibold rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out">
                            ĐỌC THÊM
                        </Link>
                    </div>
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/img-5.jpg"
                        alt="Logo"
                        width={800}
                        height={20}
                        priority
                    />
                </div>
            </div>

            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] pb-80 bg-cover bg-center bg-no-repeat bg-[url('/images/product/product-page/bg-lg.png')]">
                <div className="col-start-2 grid grid-cols-2 items-center gap-x-10">
                    <Image
                        className="dark:invert"
                        src="/images/product/product-page/img-6.jpg"
                        alt="Logo"
                        width={800}
                        height={20}
                        priority
                    />
                    <div className="px-20">
                        <h2 className="text-[30px] font-black">
                            THE CROPS
                        </h2>
                        <p className="text-[14px] text-[#666] my-5">
                            Evulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus soaking mouthwatering. First superior full-bodied drink. Like outstanding odor economical deal clinically. Odor to yummy high racy bonus soaking
                        </p>

                        <Link href="/" className="mt-5 border-2 border-[#ff281c] px-5.5 py-2 font-semibold rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out">
                            ĐỌC THÊM
                        </Link>
                    </div>

                </div>
            </div>

        </>
    );
}