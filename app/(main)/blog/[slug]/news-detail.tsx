"use client"

import { New, news } from "@/app/types/new";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import NewsSections from "./news-section";
import NewsRelated from "./news-related";

interface NewDetailProp {
    post: New;
}

export default function NewDetail({ post }: NewDetailProp) {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn("Không tìm thấy id:", id);
        }
    };

    const createdAt = new Date(post.createdAt); // post.createdAt là string hoặc Date
    const formattedDate = createdAt.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const filterednews = news.filter(n => n.categoryNewsId === post.categoryNewsId).slice(0, 5);


    return (
        <>
            <div className="relative h-[480px]">
                <Image
                    className="z-0 dark:invert h-full object-cover "
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full w-full top-0 grid grid-cols-[1fr_3fr_2fr] items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[60px] font-extrabold">
                            {post.title}
                        </h1>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>Tin tức</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr] pt-6 pb-16">
                <div className="col-start-2">
                    <div className="lg:grid lg:grid-cols-[2fr_1fr] gap-6">
                        <div className="pb-[15px]">

                            <div className="grid grid-cols-2 italic text-[18px] font-thin pb-3 text-[#000000]">
                                <p>
                                    Tác giả : {post.author}
                                </p>
                                <p className="text-right">
                                    Ngày đăng : {formattedDate}
                                </p>
                            </div>

                            {/* Image */}
                            <Image
                                className="z-0 dark:invert h-[500px] object-cover rounded-lg"
                                src={post.image ?? "/default-img/no-image.png"}
                                alt={post.title}
                                width={1900}
                                height={20}
                                priority
                            />

                            {/* Description */}

                            <div className="border-l-8 border-[#b8b8b8] px-5 py-2 my-5">

                                <p className="font-semibold leading-10 text-[18px] italic">{post.description}</p>
                            </div>

                            {/* Nếu muốn thêm "Nội dung chính", có thể map từ post.url hoặc sections nếu bạn mở rộng model */}
                            {/* Ví dụ placeholder */}
                            {post.sections && (
                                <div className="border-2 border-[#01387F] rounded-sm px-3 py-4 mb-10">
                                    <span className="text-[#01387F] text-[20px] font-semibold py-2">
                                        Nội dung chính:
                                    </span>
                                    <div className="pl-3">
                                        {post.sections?.map((item, index) => {
                                            const sectionId = `section${index + 1}`;
                                            return (
                                                <div key={item.id} className="flex items-center gap-x-2">
                                                    <FontAwesomeIcon icon={faCircle} className="text-[#dc2626] text-[12px]" />
                                                    <span>
                                                        <a
                                                            href={`#section${index + 1}`}
                                                            onClick={(e) => handleScroll(e, sectionId)}
                                                            className="cursor-pointer text-[#01387F] hover:underline"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {item.title}
                                                        </a>
                                                    </span>
                                                </div>
                                            );
                                        })}

                                    </div>
                                </div>
                            )}

                            <NewsSections sections={post.sections} />
                        </div>


                        <div>
                            <NewsRelated listNews={filterednews} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
