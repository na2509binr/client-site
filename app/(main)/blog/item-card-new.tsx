import Image from "next/image";
import Link from "next/link";
import { New } from "../../types/new";
import { toSlug } from "@/app/utils/slug";

export default function ItemCardNew({ item }: { item: New }) {
    const d = new Date(item.createdAt);
    const day = d.getDate();
    const month = d.toLocaleString("en", { month: "short" });



    return (
        <div className="relative flex flex-col group overflow-visible">

            {/* IMAGE */}
            <div className="overflow-hidden">
                <Image
                    className="object-cover h-[250px] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                />
            </div>

            {/* CONTENT */}
            <div
                className="bg-[#fbf5e8] mx-5 -mt-10 px-5 pt-10 text-center z-10
                   transform transition-transform duration-300 ease-in-out 
                   group-hover:-translate-y-8"
            >
                <Link href={"/blog/" + toSlug(item.title)} className="hover:text-[#ff281c] transition-all">
                    <h2 className="font-bold text-[18px]">{item.title}</h2>
                </Link>

                <p className="mt-2.5 mb-5 text-[#666666] text-[14px]">
                    {item.description}
                </p>

                <div className="flex justify-center  cursor-pointer">
                    <Link
                        href={"/blog/" + toSlug(item.title)}
                        className="text-[#4F4A37] group-hover:text-white transition-all"
                    >
                        <div
                            className="border-2 border-[#ff281c] px-9.5 py-3.5 font-semibold rounded-full 
                       group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out"
                        >
                            CHI TIẾT
                        </div>
                    </Link>
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
    );
}
