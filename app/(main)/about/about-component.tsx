"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AboutSubComponent() {
    const pathname = usePathname();
    const isHome = pathname === "/";


    return (
        <>

            <div>
                <div className="px-2 my-5 xl:my-0 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] h-full lg:h-[550px] ">
                    <div className="col-start-2 grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col items-start justify-center">

                            <h1 className="text-[40px] font-bold mb-5">GIỚI THIỆU SƠ LƯỢC <span className="font-light">CÔNG TY</span></h1>
                            <p className="text-[14px]">
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>

                            <Link href="/" className="mt-5 border-2 border-[#ff281c] px-5.5 py-2 font-semibold rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out">
                                LIÊN HỆ
                            </Link>
                        </div>
                        {/* <div className="hidden lg:block bg-[url('/images/section_01_bg.png')] bg-no-repeat bg-right ">
                        </div> */}
                        <Image
                            className="hidden lg:block z-0 dark:invert h-full object-cover"
                            src="/images/section_01_bg.png"
                            alt="Logo"
                            width={600}
                            height={20}
                            priority
                        />
                    </div>



                </div>

                {!isHome ?
                    <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] py-10 lg:py-25 bg-[#f5deb3]/30">
                        <div className="col-start-2 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex justify-between items-center gap-x-8">
                                <Image
                                    className="dark:invert"
                                    src="/images/flour-svgrepo-com.svg"
                                    alt="Logo"
                                    width={60}
                                    height={20}
                                    priority
                                />
                                <div className="flex flex-col text-center leading-9.5">
                                    <h2 className="text-[50px] text-[#333333] font-black">0000</h2>
                                    <p className="text-[#555555] font-bold">Số liệu</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-x-8">
                                <Image
                                    className="dark:invert"
                                    src="/images/flour-svgrepo-com.svg"
                                    alt="Logo"
                                    width={60}
                                    height={20}
                                    priority
                                />
                                <div className="flex flex-col text-center leading-9.5">
                                    <h2 className="text-[50px] text-[#333333] font-black">0000</h2>
                                    <p className="text-[#555555] font-bold">Số liệu</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-x-8">
                                <Image
                                    className="dark:invert"
                                    src="/images/flour-svgrepo-com.svg"
                                    alt="Logo"
                                    width={60}
                                    height={20}
                                    priority
                                />
                                <div className="flex flex-col text-center leading-9.5">
                                    <h2 className="text-[50px] text-[#333333] font-black">0000</h2>
                                    <p className="text-[#555555] font-bold">Số liệu</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-x-8">
                                <Image
                                    className="dark:invert"
                                    src="/images/flour-svgrepo-com.svg"
                                    alt="Logo"
                                    width={60}
                                    height={20}
                                    priority
                                />
                                <div className="flex flex-col text-center leading-9.5">
                                    <h2 className="text-[50px] text-[#333333] font-black">0000</h2>
                                    <p className="text-[#555555] font-bold">Số liệu</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    : <div></div>
                }
            </div>
        </>
    );
}