import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/product";
import { toSlug } from "@/app/utils/slug";

export function parseImageString(str: string): string[] {
  if (!str) return [];
  return str
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "");
}

export default function ItemCardProduct({ item, cate }: { item: Product, cate: string }) {
    let images: string[] = [];

    if (item.image != null || item.image !== "") 
        images = parseImageString(item.image);


    return (
        <div
            key={item.id}
            className="flex flex-col bg-white border border-[#e5e5e5] overflow-hidden hover:shadow-[0_1px_18px_0_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out"
        >
            <div className="relative w-full aspect-4/3">
                <Image
                    src={images[0] || "/images/no-image.png"}
                    alt={item.name}
                    fill
                    className="object-cover p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    priority={false}
                />
            </div>
            <div className="px-5 pb-8 pt-3">
                <h3 className="text-[20px] font-semibold">{item.name}</h3>
                {/* <div className="text-sm mt-5 mb-2.5">
                    <span className="text-black text-[20px] font-bold mr-2">
                        {item.price.toLocaleString()} đ
                    </span>
                    <span className="line-through text-red-600 text-[14px]">
                        {item.salePrice.toLocaleString()} đ
                    </span>
                </div> */}
                <div className="flex justify-center items-center">

                    <Link
                        href={"/product/" + toSlug(item.name)}
                        className="inline-block mt-3 px-4 py-2 text-[12px] text-[#4f4a37] font-bold border-2 border-[#ff281c] rounded-full hover:bg-[#ff281c] hover:text-white transition-all duration-300 ease-in-out "
                    >
                        XEM CHI TIẾT
                    </Link>
                </div>
            </div>
        </div>
        // <div className="relative flex flex-col group overflow-visible">

        //     {/* IMAGE */}
        //     <div className="overflow-hidden">
        //         <Image
        //             className="object-cover h-[250px] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        //             src={item.image}
        //             alt={item.title}
        //             width={400}
        //             height={250}
        //         />
        //     </div>

        //     {/* CONTENT */}
        //     <div
        //         className="bg-[#fbf5e8] mx-5 -mt-10 px-5 pt-10 text-center z-10
        //            transform transition-transform duration-300 ease-in-out 
        //            group-hover:-translate-y-8"
        //     >
        //         <Link href={item.url ?? "#"} className="hover:text-[#ff281c] transition-all">
        //             <h2 className="font-bold text-[18px]">{item.title}</h2>
        //         </Link>

        //         <p className="mt-2.5 mb-5 text-[#666666] text-[14px]">
        //             {item.description}
        //         </p>

        //         <div className="flex justify-center">
        //             <div
        //                 className="border-2 border-[#ff281c] px-9.5 py-3.5 font-semibold rounded-full 
        //                group-hover:bg-[#ff281c] transition-all duration-300 ease-in-out"
        //             >
        //                 <Link
        //                     href={item.url ?? "#"}
        //                     className="text-[#4F4A37] group-hover:text-white transition-all"
        //                 >
        //                     CHI TIẾT
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>

        //     {/* DATE BADGE */}
        //     <div className="absolute font-bold bg-[#FCDB5A] left-5 px-4.25 py-3.25">
        //         <div className="flex flex-col justify-center items-center">
        //             <span className="text-[25px] font-black">{day}</span>
        //             <span className="text-[12px] text-[#9A8841]">{month}</span>
        //         </div>
        //     </div>
        // </div>
    );
}
