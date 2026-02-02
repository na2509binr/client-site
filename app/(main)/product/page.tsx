// import BannerPages from "@/app/(main)/components/banner-pages";
// // import { categories, products } from "@/app/types/product";
// import { categoriesWithSlug, toSlug } from "@/app/utils/slug";
// // import { categoriesWithSlug } from "@/data/categoryWithSlug";

// // import { toSlug } from "@/utils/slug";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import ProductsPagination from "./product-pagination";
// import { CategoryProductAPI, ProductAPI } from "@/app/utils/api";


// export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
//     const categories = await CategoryProductAPI.getAll();
//     const products = await ProductAPI.getAll();
//     const { category } = await params;
//     console.log(category);
//     // tìm category theo slug
//     const cate = categoriesWithSlug.find((c: { slug: string; }) => c.slug === category);
//     if (!cate) return <h1>Category not found</h1>;

//     // lọc sản phẩm theo cateId
//     const filteredProducts = products.filter(p => p.cateId === cate.id);

//     return (
//         <>
//             <div className="relative h-[400px] lg:h-[600px]">
//                 <Image
//                     className="z-0 dark:invert h-full object-cover "
//                     src="/images/about-bg.jpg"
//                     alt="Logo"
//                     width={1900}
//                     height={20}
//                     priority
//                 />
//                 <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

//                 <div className="absolute h-full w-full top-0 px-2 flex flex-col justify-center lg:grid grid-cols-[1fr_5fr_1fr] xl:grid-cols-[1fr_2fr_3fr] items-center text-white">
//                     <div className="col-start-2">
//                         <h1 className="text-[40px] lg:text-[60px] font-extrabold">
//                             {/* <span className="block text-[40px] font-extralight">SẢN PHẨM</span> */}
//                             <span className="">{cate.name.toUpperCase()}</span>
//                         </h1>
//                         <p className="my-6 text-[13px] lg:text-[16px]">
//                             {cate.description}
//                         </p>
//                         <div className="text-[13px] font-semibold flex items-center space-x-0.75">
//                             <Link href="/" className="text-[#b3e53f]">
//                                 <span>Trang chủ</span>
//                             </Link>
//                             <FontAwesomeIcon icon={faAngleRight} />
//                             <Link href="/product" className="text-[#b3e53f]">
//                                 <span>Sản phẩm</span>
//                             </Link>
//                             <FontAwesomeIcon icon={faAngleRight} />
//                             <span>{cate.name}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
//                 <div className="col-start-2 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 my-10 lg:my-30">
//                     <div className="row-start-2 lg:col-start-1 lg:row-start-1">
//                         <h2 className="font-black text-[#333333] text-[20px]">DANH MỤC SẢN PHẨM</h2>
//                         <ul className="list-disc list-inside space-y-8 text-[#333333] my-6 mb-15">
//                             {categories.map((cate) => {
//                                 return (
//                                     <li key={cate.id}>
//                                         <Link href={toSlug(cate.name)} className="hover:text-[#913e18]">
//                                             <span>{cate.name}</span>
//                                         </Link>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>

//                     <div className="row-start-1 lg:col-start-2">
//                         <ProductsPagination data={filteredProducts} cate={category} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import BannerPages from "@/app/(main)/components/banner-pages";
// import { categoriesWithSlug, toSlug } from "@/app/utils/slug";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import ProductsPagination from "./product-pagination";
// import { CategoryProductAPI, ProductAPI } from "@/app/utils/api";

// export default function CategoryPage() {
//     const { category } = useParams<{ category: string }>();

//     const [categories, setCategories] = useState<any[]>([]);
//     const [products, setProducts] = useState<any[]>([]);
//     const [loading, setLoading] = useState(true);



//     useEffect(() => {
//         CategoryProductAPI.getAll().then(setCategories);
//     }, []);
//     useEffect(() => {
//         ProductAPI.getFiltByCateId().then(setProducts);
//     }, []);


//     // useEffect(() => {
//     //     async function fetchData() {
//     //         try {
//     //             const cateData = await CategoryProductAPI.getAll();
//     //             const proData = await ProductAPI.getAll();

//     //             setCategories(cateData);
//     //             setProducts(proData);
//     //         } finally {
//     //             setLoading(false);
//     //         }
//     //     }

//     //     fetchData();
//     // }, []);

//     // if (loading) return <p>Đang tải...</p>;

//     // const cate = categories.find((c) => c.slug === category);
//     // if (!cate) return <h1>Category not found</h1>;

//     const filteredProducts = products.filter((p) => p.cateId === cate.id);

//     return (
//         <>
//             <div className="relative h-[400px] lg:h-[600px]">
//                 <Image
//                     className="z-0 dark:invert h-full object-cover"
//                     src="/images/about-bg.jpg"
//                     alt="Logo"
//                     width={1900}
//                     height={20}
//                     priority
//                 />
//                 <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

//                 <div className="absolute h-full w-full top-0 px-2 flex flex-col justify-center lg:grid grid-cols-[1fr_5fr_1fr] xl:grid-cols-[1fr_2fr_3fr] items-center text-white">
//                     <div className="col-start-2">
//                         {/* <h1 className="text-[40px] lg:text-[60px] font-extrabold">
//                             {cate.name.toUpperCase()}
//                         </h1>
//                         <p className="my-6 text-[13px] lg:text-[16px]">
//                             {cate.description}
//                         </p> */}
//                         <div className="text-[13px] font-semibold flex items-center space-x-0.75">
//                             <Link href="/" className="text-[#b3e53f]">
//                                 <span>Trang chủ</span>
//                             </Link>
//                             <FontAwesomeIcon icon={faAngleRight} />
//                             <Link href="/product" className="text-[#b3e53f]">
//                                 <span>Sản phẩm</span>
//                             </Link>
//                             {/* <FontAwesomeIcon icon={faAngleRight} />
//                             <span>{cate.name}</span> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
//                 <div className="col-start-2 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 my-10 lg:my-30">
//                     <div className="row-start-2 lg:col-start-1 lg:row-start-1">
//                         <h2 className="font-black text-[#333333] text-[20px]">
//                             DANH MỤC SẢN PHẨM
//                         </h2>
//                         <ul className="list-disc list-inside space-y-8 text-[#333333] my-6 mb-15">
//                             {categories.map((cate) => (
//                                 <li key={cate.id}>
//                                     <Link
//                                         href={toSlug(cate.name)}
//                                         className="hover:text-[#913e18]"
//                                     >
//                                         <span>{cate.name}</span>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="row-start-1 lg:col-start-2">
//                         <ProductsPagination data={filteredProducts} cate={category as string} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }







"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductsPagination from "./product-pagination";
import { CategoryProductAPI, ProductAPI } from "@/app/utils/api";
import { toSlug } from "@/app/utils/slug";
import { ChevronRight } from "lucide-react";

export default function CategoryPage() {

    const [categories, setCategories] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [cateId, setCateId] = useState<number>(-1);   // ⭐ mặc định load tất cả
    const [loading, setLoading] = useState(true);

    const filteredCategories = categories.filter((p: any) => p.isActive === true);
    // Load categories 1 lần
    useEffect(() => {
        CategoryProductAPI.getAll().then((data) => {
            setCategories(data);
        });
    }, []);

    // Load products theo cateId
    useEffect(() => {
        setLoading(true);
        ProductAPI.getFiltByCateId(cateId).then((data) => {
            setProducts(data as any[]);
            setLoading(false);
        });
    }, [cateId]);   // ⭐ mỗi lần cateId đổi → gọi lại API

    return (
        <>
            {/* Banner */}
            <div className="relative h-[400px] lg:h-[600px]">
                <Image
                    className="z-0 dark:invert h-full object-cover"
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full w-full top-0 px-2 flex flex-col justify-center lg:grid grid-cols-[1fr_5fr_1fr] xl:grid-cols-[1fr_2fr_3fr] items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[40px] lg:text-[60px] font-extrabold">
                            DANH MỤC SẢN PHẨM
                        </h1>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <Link href="/product" className="text-[#b3e53f]">
                                <span>Sản phẩm</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
                <div className="col-start-2 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 my-10 lg:my-30">
                    {/* Sidebar */}
                    <div className="row-start-2 lg:col-start-1 lg:row-start-1">
                        <ul className="list-inside space-y-6 text-[#333333] my-6 mb-15">
                            <li className="list-none font-black text-[#333333] text-[20px]">
                                <span
                                    className={`cursor-pointer hover:text-[#913e18]`}
                                    onClick={() => setCateId(-1)}
                                >
                                    TẤT CẢ SẢN PHẨM
                                </span>
                            </li>

                            {filteredCategories.map((cate) => (
                                <li key={cate.id} className="flex items-center gap-1">
                                    <ChevronRight />
                                    <span
                                        onClick={() => setCateId(cate.id)}
                                        className={`cursor-pointer hover:text-[#913e18] ${cateId === cate.id ? "font-bold" : ""}`}
                                    >
                                        {cate.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="row-start-1 lg:col-start-2">
                        {loading ? (
                            <p>Đang tải...</p>
                        ) : (
                            <ProductsPagination data={products} cate={cateId.toString()} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
