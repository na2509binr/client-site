import BannerPages from "@/app/(main)/components/banner-pages";
import { categories, products } from "@/app/types/product";
import { categoriesWithSlug, toSlug } from "@/app/utils/slug";
// import { categoriesWithSlug } from "@/data/categoryWithSlug";

// import { toSlug } from "@/utils/slug";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductsPagination from "./product-pagination";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    console.log(category);
    // tìm category theo slug
    const cate = categoriesWithSlug.find((c: { slug: string; }) => c.slug === category);
    if (!cate) return <h1>Category not found</h1>;

    // lọc sản phẩm theo cateId
    const filteredProducts = products.filter(p => p.cateId === cate.id);

    return (
        <>
            <div className="relative h-[600px]">
                <Image
                    className="z-0 dark:invert h-full object-cover "
                    src="/images/about-bg.jpg"
                    alt="Logo"
                    width={1900}
                    height={20}
                    priority
                />
                <div className="absolute h-full top-0 left-0 right-0 bg-[#569f56]/60"></div>

                <div className="absolute h-full w-full top-0 grid grid-cols-[1fr_2fr_3fr] items-center text-white">
                    <div className="col-start-2">
                        <h1 className="text-[60px] font-extrabold">
                            {/* <span className="block text-[40px] font-extralight">SẢN PHẨM</span> */}
                            <span className="">{cate.name.toUpperCase()}</span>
                        </h1>
                        <p className="my-6 ">
                            {cate.description}
                        </p>
                        <div className="text-[13px] font-semibold flex items-center space-x-0.75">
                            <Link href="/" className="text-[#b3e53f]">
                                <span>Trang chủ</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <Link href="/product" className="text-[#b3e53f]">
                                <span>Sản phẩm</span>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <span>{cate.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-2 lg:block xl:px-0 xl:grid xl:grid-cols-[1fr_8fr_1fr] 2xl:grid-cols-[1fr_4fr_1fr]">
                <div className="col-start-2 grid grid-cols-[1fr_3fr] gap-x-10 my-30">
                    <div className="">
                        <h2 className="font-black text-[#333333] text-[20px]">DANH MỤC SẢN PHẨM</h2>
                        <ul className="list-disc list-inside space-y-8 text-[#333333] my-6 mb-15">
                                {categories.map((cate) => {
                                    return(
                                        <li key={cate.id}>
                                            <Link href={toSlug(cate.name)} className="hover:text-[#913e18]">
                                                <span>{cate.name}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>

                    <div>
                        <ProductsPagination data={filteredProducts} cate={category} />
                    </div>
                </div>
            </div>
        </>
    );
}
