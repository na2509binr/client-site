import { New } from "@/app/types/new";
import { toSlug } from "@/app/utils/slug";
import Link from "next/link";
import Image from "next/image";


interface NewsRelatedProp {
    listNews: New[];
}

export default function NewsRelated({ listNews }: NewsRelatedProp) {
    return (
        <>
            <div>
                <h1 className="text-white text-[20px] py-2 px-6 font-bold bg-[#569f56]/60 rounded-md">TIN TỨC LIÊN QUAN</h1>
                <div className="pt-[25px]">
                    {listNews.map((item) => {
                        return (
                            <div className="mb-5">
                                <Link href={toSlug(item.title)}>
                                    <Image
                                        className="z-0 dark:invert h-[250px] object-cover rounded-lg"
                                        src={(item.image ?? "/default-img/no-image.png")}
                                        alt={item.title}
                                        width={500}
                                        height={20}
                                        loading="lazy"
                                    />
                                </Link>
                                <Link href="">
                                    <h2 className="font-semibold text-[18px] leading-[30px] pt-2 text-[#01387F]">{item.title}</h2>
                                </Link>
                            </div >
                        );
                    })}

                </div >
            </div >
        </>
    );
}